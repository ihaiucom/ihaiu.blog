import AntFrame from '../AntFrame';
import AntPlatformBase from './AntPlatformBase';
import { SdkUserInfo, eSex } from './AntPlatformBase';
import GamerLoginS2C = proto.GamerLoginS2C;

declare var net;
export default class AntPlatformMine extends AntPlatformBase
{
    constructor() {
        super();
    }

    public async Login(userName: string = null, password: string = "", server:number = 1, roletype:number = 1): Promise<GamerLoginS2C> {
        net.config.channel = "mine";

        let name = userName;
        if(isNullOrEmpty(name))
            name = AntFrame.LocationUrlParam("name") || AntFrame.RandName(2, 7);

        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.mineLogin(name, password, name, roletype, server, function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    net.logic.connect();
                    let callback = function(e:GamerLoginS2C){
                        net.logic.gamerLoginS2C.off(callback);
                        resolve(e);
                    };
                    net.logic.gamerLoginS2C.on(callback);
                }
            })
        });
    }

    public async Login2(userName: string = null, password: string = ""): Promise<GamerLoginS2C> {
        net.config.channel = "mine";

        let name = userName;
        if(isNullOrEmpty(name))
            name = AntFrame.LocationUrlParam("name") || AntFrame.RandName(2, 7);

        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.mineLogin2(name, password, function(ok, json){
                resolve(json as GamerLoginS2C);
            })
        });
    }

    public async CheckCdk(session:string, cdk:string): Promise<GamerLoginS2C>
    {
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.checkcdk(session, cdk, function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    resolve({} as GamerLoginS2C);
                }
            })
        });
    }

    public async CheckIDCard(session: string, name: string, idCard: string): Promise<GamerLoginS2C>{
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.checkIDCard(session, name, idCard, function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    resolve({} as GamerLoginS2C);
                }
            })
        });
    }


    public async Areas(): Promise<GamerLoginS2C>
    {
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.areas(function(ok, json){
                if (!ok) {
                    this.Areas();
                } else {
                    resolve(json as GamerLoginS2C);
                }
            })
        });
    }

    public async newAndUseRole(session:string, name:string, server:number): Promise<GamerLoginS2C>
    {
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.newAndUseRole(session, name, 1, server, "", function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    net.logic.connect();
                    let callback = function(e:GamerLoginS2C){
                        net.logic.gamerLoginS2C.off(callback);
                        resolve(e);
                    };
                    net.logic.gamerLoginS2C.on(callback);
                }
            })
        });
    }

    public async useRole(session:string, id:number): Promise<GamerLoginS2C>
    {
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.useRole(session, id, function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    net.logic.connect();
                    let callback = function(e:GamerLoginS2C){
                        net.logic.gamerLoginS2C.off(callback);
                        resolve(e);
                    };
                    net.logic.gamerLoginS2C.on(callback);
                }
            })
        });
    }

    public async FastLogin(name:string,channel:string,openid:string): Promise<GamerLoginS2C>{
        net.config.channel = channel;
        return new Promise<GamerLoginS2C>(resolve => {
            net.auth.fastLogin(name, channel, openid, function(ok, json){
                if(!ok){
                    resolve(json as GamerLoginS2C);
                } else {
                    net.logic.connect();
                    let callback = function(e:GamerLoginS2C){
                        net.logic.gamerLoginS2C.off(callback);
                        resolve(e);
                    };
                    net.logic.gamerLoginS2C.on(callback);
                }
            })
        });
    }

    public async GameDoSdkAuthAsync() : Promise<SdkUserInfo> {
        this.m_stSdkUserInfo.nickName = "ANTMINE-NICKNAME";
        this.m_stSdkUserInfo.avatarUrl = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKpmpnxfYeeUqFOlwK9x260xibs866I7NpmuHjgerLXgUk1B77HpIo2oZP0wAbnib4Lkc30N7yibYoww/132";
        this.m_stSdkUserInfo.gender = eSex.Man;
        this.m_stSdkUserInfo.city = "上海";
        this.m_stSdkUserInfo.country = "中国";
        this.m_stSdkUserInfo.language = "zh_CN"
        this.m_stSdkUserInfo.province = "上海";
        return new Promise<SdkUserInfo>(resolve=>{
            resolve(this.m_stSdkUserInfo);
        });
    }

    public GetLaunchOptions():any {
        return {
            key1:AntFrame.LocationUrlParam("key1"),
            key2:AntFrame.LocationUrlParam("key2"),
        }
    } 
}
