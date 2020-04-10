import RoleData from "./RoleData";
import Game from "../../Game";
// import AntFrame from "../../AntFrame/AntFrame";
// import GamerStatus = proto.GamerStatus;
// import IGamerMain = proto.IGamerMain;
// import IGamerMini = proto.IGamerMini;

/** 玩家等级快照数据 */
export class UserLevelSnapshotData
{
    // 经验
    public exp: number;

    //玩家等级
    public level: number;

}

export default class UserData extends RoleData
{
    // TODO 最大等级配置，迁移时记得更改使用的地方
    maxLevel: int = 80;

    changeNameNum: number = 0;

    constructor()
    {
        super();
        this.InitTestData();
    }

    InitTestData()
    {
        this.exp = 0;
    }

    /**
     * 是否登录了并且获取了用户数据
     */
    isLoginAndGetUserData: boolean = false;


    // 获取头像Url		
    // get headIconUrl(): string
    // {
    //     // if(!isNullOrEmpty(AntFrame.platform.userInfo.avatarUrl))
    //     //     return AntFrame.platform.userInfo.avatarUrl;
        
    //     // let portraitCfg = Game.config.headPortrait.getConfig(this.icon);
    //     // if(!portraitCfg) portraitCfg = Game.config.headPortrait.getConfig(1001);
    //     // if (portraitCfg)
    //     // {
    //     //     return portraitCfg.iconUrl;
    //     // }
    //     return "";
    // }

    isShowLevelUp: boolean = false;
    


    get maxExp(): number
    {
        let playerLevel = Game.config.playerLevel;
        if(playerLevel.maxLevel > Game.user.level)
        {
            return playerLevel.getConfig(Game.user.level + 1).playerNeedExp;
        }
        return 0;
    }
    
    public setGamerMain(data: any)
    // public setGamerMain(data: IGamerMain)
    {
        // console.info("UserData setGamerMain", data);
        super.setGamerMain(data);
    }

    // 等级快照数据
    public levelSnapshotData = new UserLevelSnapshotData();
    // 刷新等级快照
    public levelSnapshot()
    {
        this.levelSnapshotData.exp = this.exp;
        this.levelSnapshotData.level = this.level;
    }

    public getHeadIconByHeroId(heroId: number|string)
    {
        let portraitCfg = Game.config.avatar.getConfig(heroId);
        if(!portraitCfg) portraitCfg = Game.config.avatar.getConfig(1001);
        if(portraitCfg)
        {
            return portraitCfg.iconUrl;
        }
        return "";
    }

    IsNewGetAvatar()
    {
        let heroidlist = Game.moduleModel.hero.IDList;
        for (let i = 0, len = heroidlist.length; i < len; i++) 
        {
            let id = heroidlist[i]
            if (this.IsNewAvatar(id)) 
            {
                return true
            }
        }

        return false;
    }

    IsNewAvatar(heroid:number)
    {
        let hero = Game.moduleModel.hero.GetData(heroid);
        return !hero.isSaw;
    }
}