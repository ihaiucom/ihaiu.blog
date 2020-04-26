(function () {
  'use strict';

  var REG = Laya.ClassUtils.regClass;
  var ui;
  (function (ui) {
    var test;
    (function (test) {
      class BigUI extends Laya.Scene {
        constructor() { super(); }
        createChildren() {
          super.createChildren();
          this.createView(BigUI.uiView);
        }
      }
      BigUI.uiView = { "type": "Scene", "props": { "width": 610, "height": 757 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "test/2.png" }, "compId": 4 }, { "type": "List", "props": { "y": 104, "x": 13, "width": 585, "var": "_list", "vScrollBarSkin": " ", "spaceY": 20, "repeatX": 1, "height": 629, "elasticEnabled": true }, "compId": 3, "child": [{ "type": "bigItem", "props": { "runtime": "view/bigItem.ts", "renderType": "render" }, "compId": 5 }] }], "loadList": ["test/2.png"], "loadList3D": [] };
      test.BigUI = BigUI;
      REG("ui.test.BigUI", BigUI);
      class BigItemUI extends Laya.View {
        constructor() { super(); }
        createChildren() {
          super.createChildren();
          this.createView(BigItemUI.uiView);
        }
      }
      BigItemUI.uiView = { "type": "View", "props": { "width": 580, "height": 100 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 575, "texture": "test/3.png", "height": 99 }, "compId": 7 }, { "type": "Image", "props": { "y": 6, "x": 22, "width": 80, "var": "img_head", "skin": "test/4.png", "height": 80 }, "compId": 3, "child": [{ "type": "Sprite", "props": { "y": -1, "x": -1, "width": 82, "texture": "test/c1.png", "renderType": "mask", "height": 82 }, "compId": 10 }] }, { "type": "Label", "props": { "y": 38.5, "x": 136, "width": 259, "var": "text_name", "text": "名字", "overflow": "scroll", "height": 24, "fontSize": 20, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center" }, "compId": 4 }, { "type": "Label", "props": { "y": 42.5, "x": 496, "var": "text_score", "text": "分数", "fontSize": 20, "color": "#ffffff", "align": "center" }, "compId": 5 }], "loadList": ["test/3.png", "test/4.png", "test/c1.png"], "loadList3D": [] };
      test.BigItemUI = BigItemUI;
      REG("ui.test.BigItemUI", BigItemUI);
    })(test = ui.test || (ui.test = {}));
  })(ui || (ui = {}));

  class BigItem extends ui.test.BigItemUI {
    constructor() {
      super();
    }
    set dataSource(value) {
      if (!value)
        return;
      this.img_head.skin = value.avatarIP;
      this.text_name.text = value.UserName;
      this.text_score.text = value.RankValue;
    }
  }

  class GameConfig {
    constructor() { }
    static init() {
      var reg = Laya.ClassUtils.regClass;
      reg("view/bigItem.ts", BigItem);
    }
  }
  GameConfig.width = 640;
  GameConfig.height = 1136;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "none";
  GameConfig.alignV = "top";
  GameConfig.alignH = "left";
  GameConfig.startScene = "test/Big.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  class BigRank extends ui.test.BigUI {
    constructor() {
      super();
      this._key = 'score';
      this.arr = [
        { index: 1, avatarIP: 'test/4.png', UserName: "测试用户1", RankValue: 100 },
        { index: 2, avatarIP: 'test/4.png', UserName: "测试用户2", RankValue: 75 },
        { index: 3, avatarIP: 'test/4.png', UserName: "测试用户3", RankValue: 50 },
        { index: 4, avatarIP: 'test/4.png', UserName: "测试用户4", RankValue: 25 }
      ];
    }
    init() {
      console.log("BigRank init");
      Laya.stage.addChild(this);
      this.setlist(this.arr);
      if (Laya.Browser.onMiniGame) {
        wx.onMessage(this.recevieData.bind(this));
        // this.getFriendData();
      }
    }
    getFriendData() {
      var _$this = this;
      wx.getFriendCloudStorage({
        keyList: [this._key],
        success: function (res) {
          var listData;
          var obj;
          var kv;
          var arr = [];
          console.log('-----------------getFriendCloudStorage------------');
          if (res.data) {
            for (var i = 0; i < res.data.length; i++) {
              obj = res.data[i];
              if (!(obj.KVDataList.length))
                continue;
              kv = obj.KVDataList[0];
              if (kv.key != _$this._key)
                continue;
              kv = JSON.parse(kv.value);
              listData = {};
              listData.avatarIP = obj.avatarUrl;
              listData.UserName = obj.nickname;
              listData.openID = obj.openid;
              listData.RankValue = kv.wxgame.value1;
              listData.update_time = kv.wxgame.update_time;
              arr.push(listData);
            }
            arr = arr.sort(function (a, b) {
              return b.RankValue - a.RankValue;
            });
            for (var i = 0; i < arr.length; i++) {
              arr[i].index = i + 1;
            }
            _$this.setlist(arr);
          }
        },
        fail: function (data) {
          console.log('------------------获取托管数据失败--------------------');
          console.log(data);
        }
      });
    }
    recevieData(message) {
      var type = message.type;
    }
    setSelfData(data) {
      var kvDataList = [];
      var obj = {};
      obj.wxgame = {};
      obj.wxgame.value1 = data;
      obj.wxgame.update_time = Laya.Browser.now();
      kvDataList.push({ "key": this._key, "value": JSON.stringify(obj) });
      wx.setUserCloudStorage({
        KVDataList: kvDataList,
        success: function (e) {
          console.log('-----success:' + JSON.stringify(e));
        },
        fail: function (e) {
          console.log('-----fail:' + JSON.stringify(e));
        },
        complete: function (e) {
          console.log('-----complete:' + JSON.stringify(e));
        }
      });
    }
    setlist(arr) {
      this._list.array = arr;
      this._list.refresh();
    }
  }

  class Main {
    constructor() {
      console.log("openDataContext bundle");
      Laya.isWXOpenDataContext = true;
      Laya.isWXPosMsg = true;
      Laya.init(GameConfig.width, GameConfig.height, false);
      Laya.stage.scaleMode = GameConfig.scaleMode;
      Laya.stage.screenMode = GameConfig.screenMode;
      Laya.stage.alignV = GameConfig.alignV;
      Laya.stage.alignH = GameConfig.alignH;
      console.log("openDataContext wx.getFileSystemManager", wx.getFileSystemManager)
      if (Laya.Browser.onMiniGame)

        wx.onMessage(function (data) {
          console.log("openDataContext onMessage", data);
          if (data.url == "res/atlas/test.atlas") {
            Laya.loader.load("res/atlas/test.atlas", Laya.Handler.create(this, this.onComplete));
          }
        }.bind(this));
      else
        Laya.loader.load("res/atlas/test.atlas", Laya.Handler.create(this, this.onComplete));
    }
    onComplete() {
      var rank = new BigRank();
      rank.init();
    }
  }
  new Main();

}());
