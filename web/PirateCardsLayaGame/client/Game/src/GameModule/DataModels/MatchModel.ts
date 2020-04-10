import MModel from "../../GameFrame/Module/MModel";
import Game from "../../Game";
import { LauncherParameter } from "../../GameWar/Logic/Struct/LauncherParameter";
import { War } from "../../GameWar/Logic/War";
import { MenuId } from "../MenuId";
import IGamerMatch = proto.IGamerMatch;
import CheckPointConfig from "../../Config/ConfigExtends/CheckPointConfig";

export default class MatchModel extends MModel
{
    /** 匹配信息协议 */
    matchInfo: proto.MatchInfo;

    /** 是否游戏启动的时候进入War */
    public isGameLauncherEnterWar = false;

    
    /** 自己角色所在列表位置 */
    public get selfPos():number
    {
        for(let i = 0; i < this.matchInfo.gamers.length; i++) 
        {
            if(this.matchInfo.gamers[i].mini.id == Game.user.id) {
                return i
            }
        }
        return -1       
    }

    public get Team():IGamerMatch
    {
        let selfpos = this.selfPos;
        let gamers  = this.gamers;
        let teamId  = gamers.length
        return 
    }

    /**
     * 当前战斗模式
     */
    public get pvpType():number
    {
        return this.matchInfo.pvpType;
    }

    /**
     * 当前战斗玩家信息
     */
    public get gamers():proto.IGamerMatch[]
    {
        return this.matchInfo.gamers;
    }

    public GetGamerByPos(pos : number) : IGamerMatch
    {
        if(!this.matchInfo || !this.matchInfo.gamers)
        {
            return;
        }
        let gamers = this.matchInfo.gamers;
        let item = gamers[pos];
        return item;
    }
    /**
     * 启动战斗
     * @param isLocal 是否为单机,默认为false
     */
    public launchWar(isLocal : boolean = false)
    {
        let launcherParameter: LauncherParameter = new LauncherParameter();
        launcherParameter.matchInfo = this.matchInfo;
        launcherParameter.exitOpenMenuId = MenuId.Home;
        launcherParameter.exitOpenTabIndex = -1;
        launcherParameter.isLocalSignal = isLocal;
        switch (this.matchInfo.pvpType) {
            case proto.PVPType.PVE_M1:
            case proto.PVPType.PVE_M2:
            case proto.PVPType.PVE_M3:
            case proto.PVPType.PVE_M4:
                if (Game.moduleModel.team.GetTeam()) 
                {
                    launcherParameter.exitOpenMenuId = MenuId.Team;
                    break;
                }

                let config = Game.config.checkPoint.getConfig(this.matchInfo.checkPointId);
                if(config)
                {
                    if(config.type == proto.CheckPointType.SecretBook)
                    {
                        launcherParameter.exitOpenMenuId = MenuId.SecretBookListWindow;
                    }
                    else if(config.type == proto.CheckPointType.SecretLand)
                    {
                        launcherParameter.exitOpenMenuId = MenuId.SecretLand;
                    }
                    else
                    {
                        launcherParameter.exitOpenMenuId = MenuId.Sections;
                        if(config.type == proto.CheckPointType.Story)
                            launcherParameter.exitOpenTabIndex = 0;
                        else if(config.type == proto.CheckPointType.Elite)
                            launcherParameter.exitOpenTabIndex = 1;
                        else if(config.type == proto.CheckPointType.Devil)
                            launcherParameter.exitOpenTabIndex = 2;
                    }
                }
                else
                {
                    launcherParameter.exitOpenMenuId = MenuId.Home;
                }
                break;
        
            default:
                break;
        }
        launcherParameter.selfPos = this.selfPos;
        
        let mapConfig:CheckPointConfig = Game.config.checkPoint.getConfig(this.matchInfo.checkPointId);
        if (mapConfig != null)
        {
            launcherParameter.chapter = mapConfig.chapter;
            launcherParameter.sectionIndex = mapConfig.mapID;
        }
        // //TODO: 临时配置pvp地图
        else if(launcherParameter.matchInfo.pvpType == proto.PVPType.PVP_M1V1)
        {
            let mapList = Global.duelTempMapList;
            let map = mapList[Math.floor(Math.random() * mapList.length)];
            launcherParameter.chapter = map.ChapterId;
            launcherParameter.sectionIndex = map.MapId;
            launcherParameter.exitOpenMenuId = MenuId.DuelTemp;
        }
        
        War.launch(launcherParameter);
    }

    
    private static _defalutData:proto.MatchInfo;
    static get defalutData():proto.MatchInfo
    {
        if(!this._defalutData)
        {
            var MatchInfo = proto.MatchInfo;
            var GamerMatch = proto.GamerMatch;
            var GamerMini = proto.GamerMini;
            var GamerHero = proto.GamerHero;
            var Prop = proto.Prop;

            let matchInfo = new MatchInfo(
                {
                    frameDelta:33,
                    minFrameDelta:30,
                    inputDelta:50,
                    pvpType:proto.PVPType.PVE_M1,
                    threadRecv:true,         
                    session:"",   
                    gamers:[
                        new GamerMatch(
                            {
                                ai:false,
                                mini: new GamerMini({
                                    id:1,
                                    name:"test1",
                                    level:1,
                                    lsid:1,
                                    state: 3,
                                    avatar: "3",
                                    channel:  "mine"
                                }),
                                heroList: [
                                    new GamerHero({
                                        id: 1011,
                                        baseProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        allProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        commSkill : 0
                                    }),
                                    new GamerHero({
                                        id: 1001,
                                        baseProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        allProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        commSkill : 103
                                    }),
                                    new GamerHero({
                                        id: 1001,
                                        baseProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        allProp: [
                                            new Prop({ id: 8, value: 51}),
                                            new Prop({ id: 6, value: 48}),
                                            new Prop({ id: 3, value: 1014})
                                        ],
                                        commSkill : 105
                                    })
                                ]
                            }
                        ),
                    ],
                }
            ); 

            matchInfo.gamers[0].mini.id = Game.user.id;
            matchInfo.gamers[0].mini.name = Game.user.name;
            matchInfo.matchTime = 60 * 60 * 60;
            matchInfo.time = 0;
            this._defalutData = matchInfo;
        }
        return this._defalutData;
    }


    /** 选择的英雄ID */
    private _selectHeroId:int = 5;

    get selectHeroId():int
    {
        return this._selectHeroId;
    }

    set selectHeroId(val: int)
    {
        if(val && val > 0)
        {
            this._selectHeroId = val;
            Game.localStorage.setInt("MatchModel_selectHeroId", val);
        }
    }


    public Clear()
    {
        this.matchInfo = null;
    }

    
    // 初始化
    install(): void
    {
        super.install();
        this.selectHeroId  = Game.localStorage.getInt("MatchModel_selectHeroId");
    }
    

}