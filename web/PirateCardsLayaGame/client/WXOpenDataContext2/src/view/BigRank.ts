import { ui } from "../ui/layaMaxUI"
export default class BigRank extends ui.test.BigUI{
        constructor(){
            super();
        }

        /**获取好友排行榜时的key */
        private _key:String = 'test10086';
        /**list初始化使用的数据 */
        private arr:Array<any> = [
        {index:1,avatarIP:'test/4.png',UserName:"测试用户1",RankValue:100},
        {index:2,avatarIP:'test/4.png',UserName:"测试用户2",RankValue:75},
        {index:3,avatarIP:'test/4.png',UserName:"测试用户3",RankValue:50},
        {index:4,avatarIP:'test/4.png',UserName:"测试用户4",RankValue:25}
        ]

        /**
         * 初始化
         */
        public init() {
            Laya.stage.addChild(this);
            //初始化list数据
            this.setlist(this.arr);
            if(Laya.Browser.onMiniGame){
                //接受来自主域的信息
                wx.onMessage(this.recevieData.bind(this));
                // 直接展示数据
                this.getFriendData();
            }
        }
 
        /**
         * 获取好友排行
         */
        private  getFriendData():void{
            var _$this = this;
            wx.getFriendCloudStorage({
                keyList:[this._key],
                success:function(res):void{
                    //关于拿到的数据详细情况可以产看微信文档
                    //https://developers.weixin.qq.com/minigame/dev/api/UserGameData.html
                    var listData;
                    var obj;
                    var kv;
                    var arr = [];
                    console.log('-----------------getFriendCloudStorage------------');
                    if(res.data){
                        for(var i = 0;i<res.data.length;i++){
                            obj = res.data[i];
                            if(!(obj.KVDataList.length))
                                continue
                            //拉取数据是，使用了多少个key- KVDataList的数组就有多少
                            //更详细的KVData可以查看微信文档:https://developers.weixin.qq.com/minigame/dev/api/KVData.html
                            kv = obj.KVDataList[0];
                            if(kv.key!=_$this._key)
                                continue
                            kv = JSON.parse(kv.value)
                            listData = {};
                            listData.avatarIP = obj.avatarUrl;
                            listData.UserName = obj.nickname;
                            listData.openID = obj.openid;
                            listData.RankValue = kv.wxgame.value1;
                            listData.update_time=kv.wxgame.update_time;
                            arr.push(listData);
                        }
                        //根据RankValue排序
                        arr = arr.sort(function(a,b){
                            return b.RankValue - a.RankValue;
                        });
                        //增加一个用于查看的index排名
                        for(var i = 0; i< arr.length;i++){
                            arr[i].index = i + 1;
                        }
                        //设置数组
                        _$this.setlist(arr);
                    }
                }
                ,fail:function(data):void{
                    console.log('------------------获取托管数据失败--------------------');
                    console.log(data);
                }
            });
        }
        /**
         * 接收信息
         * @param message 收到的主域传过来的信息
         */
        private recevieData(message):void{
            var _$this =this;
            var type:String = message.type;
            switch(type)
            {   
                default:
                    break;
            }
        }
        /**
         * 上报自己的数据
         * @param data 上报数据
         */
        private setSelfData(data:String):void{
            var kvDataList = [];
            var obj:any = {};
            obj.wxgame ={};
            obj.wxgame.value1 = data;
            obj.wxgame.update_time = Laya.Browser.now();
            kvDataList.push({"key":this._key,"value":JSON.stringify(obj)});
            wx.setUserCloudStorage({
                KVDataList:kvDataList,
                success:function(e):void{
                    console.log('-----success:' + JSON.stringify(e));
                },
                fail:function(e):void{
                    console.log('-----fail:' + JSON.stringify(e));
                },
                complete:function(e):void{
                    console.log('-----complete:' + JSON.stringify(e));
                }
            });
        }
        /**
         * 设置list arr
         * @param arr 赋值用的arr
         */
        private setlist(arr):void{
            this._list.array =arr;
            this._list.refresh();
        }
    }
