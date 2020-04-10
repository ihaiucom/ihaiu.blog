/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamViewStruct from "../../Generates/ModuleTeam/TeamViewStruct";
import Teamer = proto.Teamer;
import GamerHero = proto.GamerHero;
import GamerMini = proto.GamerMini;
import GamerStatus = proto.GamerStatus;
import CheckPointType = proto.CheckPointType;
import TeamStatus = proto.TeamStatus;
import PlayerItem from "./PlayerItem";
import FriendItem from "./FriendItem";
import Game from "../../../Game";
import MakeTeamS2C = proto.MakeTeamS2C;
import SetTeamHeroS2C = proto.SetTeamHeroS2C;
import GamerNotifyTeamS2C = proto.GamerNotifyTeamS2C;
import GamerNotifyTeamChangeS2C = proto.GamerNotifyTeamChangeS2C;
import GamerNotifyTeamInfoS2C = proto.GamerNotifyTeamInfoS2C;
import InviteType = proto.InviteType;
import { MenuId } from "../../../GameModule/MenuId";
import TeamData from "../../../GameModule/DataEnums/TeamData";
import TimeHelper from "../../../GameHelpers/TimeHelper";

export default class TeamView extends TeamViewStruct
{
    /** 房间信息 */
    private teamData:TeamData;

    /** 目标副本 */
    private aimIndex:number = 0;

    /** 组队玩家列表 */
    private playerList:Teamer[] = [];

    /** 好友/军团玩家列表 */
    private friendList:any[] = [];

    /** 是否大秘境 */
    private isSecretLand:boolean = false;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listFriend.setVirtual();
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listPlayer.setItemRenderer(this.PlayerRender, this);
        this.m_listFriend.setItemRenderer(this.FriendRender, this);
        this.m_btnHelp.onClick(this,this.TeamHelp);
        this.m_btnAim.onClick(this, this.TeamAim);
        this.m_btnExit.onClick(this, this.TeamExit);
        this.m_btnInvite.onClick(this, this.TeamInvite);
        this.m_btnInviteWX.onClick(this, this.TeamInviteWX);
        this.m_btnStart.onClick(this, this.TeamStart);
        this.m_btnCreateTeam.onClick(this, this.CreateTeam);


        this.m_Filter.on(fgui.Events.STATE_CHANGED, this, this.UpdateFriend);
        this.m_btnAuto.on(fgui.Events.STATE_CHANGED, this, this.TeamAuto);
        this.m_btnReady.on(fgui.Events.STATE_CHANGED, this, this.TeamReady);
        this.m_btnEnterTeam.on(fgui.Events.STATE_CHANGED, this, this.TeamEnter);
        Game.event.add("MATCH_FINISH", this.MatchFinish, this);
        Game.event.add("HEROS_CHANGE", this.HerosChange, this);

        Game.net.makeTeamS2C.on(this.MakeTeamS2C, this);
        Game.net.setTeamHeroS2C.on(this.SetTeamHeroS2C, this);
        Game.net.gamerNotifyTeamS2C.on(this.GamerNotifyTeamS2C, this);
        Game.net.gamerNotifyTeamChangeS2C.on(this.GamerNotifyTeamChangeS2C, this);
        Game.net.gamerNotifyLeaveTeamS2C.on(this.GamerNotifyLeaveTeamS2C, this);
        Game.net.gamerNotifyTeamInfoS2C.on(this.GamerNotifyTeamInfoS2C, this);
        Game.net.gamerNotifyTeamMemberChangeS2C.on(this.GamerNotifyTeamMemberChangeS2C, this);
        Game.net.gamerNotifyTeamReadyS2C.on(this.GamerNotifyTeamReadyS2C, this);

        this.Init()
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listPlayer.itemRenderer.recover();
        this.m_listFriend.itemRenderer.recover();
        this.m_btnHelp.offClick(this,this.TeamHelp);
        this.m_btnAim.offClick(this, this.TeamAim);
        this.m_btnExit.offClick(this, this.TeamExit);
        this.m_btnInvite.offClick(this, this.TeamInvite);
        this.m_btnInviteWX.offClick(this, this.TeamInviteWX);
        this.m_btnStart.offClick(this, this.TeamStart);
        this.m_btnCreateTeam.offClick(this, this.CreateTeam);

        this.m_Filter.off(fgui.Events.STATE_CHANGED, this, this.UpdateFriend);
        this.m_btnAuto.off(fgui.Events.STATE_CHANGED, this, this.TeamAuto);
        this.m_btnReady.off(fgui.Events.STATE_CHANGED, this, this.TeamReady);
        this.m_btnEnterTeam.off(fgui.Events.STATE_CHANGED, this, this.TeamEnter);
        Game.event.remove("MATCH_FINISH", this.MatchFinish, this);
        Game.event.remove("HEROS_CHANGE", this.HerosChange, this);

        Game.net.makeTeamS2C.off(this.MakeTeamS2C, this);
        Game.net.setTeamHeroS2C.off(this.SetTeamHeroS2C, this);
        Game.net.gamerNotifyTeamS2C.off(this.GamerNotifyTeamS2C, this);
        Game.net.gamerNotifyTeamChangeS2C.off(this.GamerNotifyTeamChangeS2C, this);
        Game.net.gamerNotifyLeaveTeamS2C.off(this.GamerNotifyLeaveTeamS2C, this);
        Game.net.gamerNotifyTeamInfoS2C.off(this.GamerNotifyTeamInfoS2C, this);
        Game.net.gamerNotifyTeamMemberChangeS2C.off(this.GamerNotifyTeamMemberChangeS2C, this);
        Game.net.gamerNotifyTeamReadyS2C.off(this.GamerNotifyTeamReadyS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新组队玩家列表 */
    private PlayerRender(index: number, item: PlayerItem): void
    {
        item.SetViewType(!index ? (this.isSecretLand ? "secretland" : "normal") : this.m_View.selectedPage);
        item.RenderItem(this.playerList[index], index);
    }

    /** 刷新好友/军团玩家列表 */
    private FriendRender(index: number, item: FriendItem): void
    {
        item.RenderItem(this.friendList[index]);
    }

    /** 助战模式 */
    private TeamHelp()
    {
        if(this.m_Status.selectedIndex == 1)
        {
            this.m_btnHelp.selected = false;
            Game.system.toastText("匹配中无法切换！");
            return;
        }
        let ishelp = this.m_btnHelp.selected;
        Game.sender.team.TeamSetHelp(ishelp);
    }

    /** 目标入口 */
    private TeamAim()
    {
        if(this.m_View.selectedIndex && !Game.moduleModel.team.IsLeader())
        {
            Game.system.toastText("队长才可以选择目标!");
            return;
        }
        if (this.m_Status.selectedIndex == 1) 
        {
            Game.system.toastText("匹配中无法选择目标！");
            return;
        } 
        
        Game.system.TeamSelectShow(this.aimIndex);
    }

    /** 退出队伍 */
    private TeamExit()
    {
        Game.sender.team.TeamExit();
        Game.menu.back(MenuId.Team);
    }

    /** 世界邀请 */
    private TeamInvite()
    {
        Game.system.toastText("暂未开放！");
    }

    /** 微信邀请 */
    private TeamInviteWX()
    {
        Game.system.toastText("暂未开放！");
    }

    /** 开启挑战 */
    private TeamStart()
    {
        
        let model = Game.moduleModel.team;

        if (!this.aimIndex) {
            Game.system.toastText("请选择关卡！");
            return;
        }

        if (!model.IsOnLine()) 
        {
            Game.system.toastText("有人未在线！")
            return;
        }

        if (!model.IsReady()) 
        {
            Game.system.toastText("有人未准备！")
            return;
        }

        let checkpointconfig = Game.config.checkPoint.getConfig(this.aimIndex);
        let textlevel = model.GetNoLevel(checkpointconfig.Level);
        if (Boolean(textlevel)) 
        {
            Game.system.toastText(`要求等级20级，${textlevel}等级不足！`);
        }

        if(this.isSecretLand)
        {
            let textstone = model.GetNoStone(model.TeamStone);
            if (Boolean(textstone)) 
            {
                Game.system.toastText(`${textlevel}钥匙层数低于队长5层！`);
            }
        }
            Game.sender.team.TeamBattle();
    }

    /** 自动匹配 */
    private TeamAuto()
    {
        let selected = this.m_btnAuto.selected;
        if (selected) 
        {
            if (!Game.moduleModel.team.IsLeader()) 
            {
                this.m_btnAuto.selected = false;
                Game.system.toastText("队长才能开启匹配！");
                return;
            }

            if (this.m_Status.selectedIndex == 2) 
            {
                this.m_btnAuto.selected = false;
                Game.system.toastText("队伍已满！");
                return;
            }

            if (!this.aimIndex) {
                this.m_btnAuto.selected = false;
                Game.system.toastText("请选择关卡！");
                return;
            }

            this.m_Status.selectedIndex = 1;
            let data = this.teamData;
            let hero = Game.moduleModel.team.GetTeamer().hero;
            Game.sender.team.TeamMatch(data.GetPvPType(), hero.id, data.teamId, data.aim);
        }
        else
        {
            this.m_Status.selectedIndex = 0;
            Game.sender.team.TeamCancelMatch(); 
        }
    }

    /** 自动加入 */
    private TeamEnter()
    {
        let selected = this.m_btnEnterTeam.selected;
        if (selected) 
        {
            if (!this.aimIndex) 
            {
                this.m_btnEnterTeam.selected = false;
                Game.system.toastText("请选择关卡！");
                return;
            }

            this.m_Status.selectedIndex = 1;
            let hero = this.playerList[0].hero;
            let checkpointconfig = Game.config.checkPoint.getConfig(this.aimIndex);
            Game.sender.team.TeamMatch(checkpointconfig.teamLimit,hero.id, null, this.aimIndex);

            Game.moduleModel.team.matchStatus = true;
        }
        else
        {
            this.m_Status.selectedIndex = 0;
            Game.sender.team.TeamCancelMatch(); 

            Game.moduleModel.team.matchStatus = false;
        }
    }

    /** 开始准备 */
    private TeamReady()
    {
        // if (this.m_Status.selectedIndex == 1) {
        //     this.m_btnReady.selected = false;
        //     Game.system.toastText("匹配状态不可切换！");
        //     return;
        // }

        Game.sender.team.TeamReady();
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 匹配队友完成 */
    private MatchFinish()
    {
        this.m_Status.selectedIndex = 2;
        
        this.ResetMatch();
    }

    /** 切换英雄 */
    private HerosChange(heroid:number)
    {
        this.CreateTeamer();
    }

    /** 创建队伍返回 */
    private MakeTeamS2C(msg: MakeTeamS2C)
    {
        this.teamData = Game.moduleModel.team.GetTeam();

        this.UpdateAim();

        this.UpdateMembers();
    }

    /** 选择英雄返回 */
    private SetTeamHeroS2C(msg: SetTeamHeroS2C)
    {
        this.teamData = Game.moduleModel.team.GetTeam();

        this.UpdateMembers();
    }

    /** 同步队伍信息 */
    private GamerNotifyTeamS2C(msg: GamerNotifyTeamS2C)
    {
        this.teamData = TeamData.Create(msg.team);

        this.UpdateAim();
        
        this.UpdateStatus();

        this.UpdateMembers();

        this.UpdateFriend();
    }

    /** 同步队伍信息 */
    private GamerNotifyTeamChangeS2C(msg: GamerNotifyTeamChangeS2C)
    {
        this.teamData = Game.moduleModel.team.GetTeam();
        this.aimIndex = this.teamData.aim;

        switch (msg.type) 
        {
            case 1:
                this.UpdateAim();
                break;
            case 2:
                this.UpdateStatus();
                break;
        }
    }

    /** 同步队员离开 */
    private GamerNotifyLeaveTeamS2C()
    {
        this.teamData = Game.moduleModel.team.GetTeam();

        this.UpdateMembers();

        this.UpdateFriend();
    }

    /** 同步队伍信息 */
    private GamerNotifyTeamInfoS2C(msg: GamerNotifyTeamInfoS2C)
    {
        if (msg.type == InviteType.Kick)
        {
            Game.menu.back(MenuId.Team);
            return;
        }

        this.UpdateFriend();
    }

    /** 同步队伍成员信息 */
    GamerNotifyTeamMemberChangeS2C()
    {
        this.teamData = Game.moduleModel.team.GetTeam();

        this.UpdateMembers();
        
        this.UpdateFriend();
    }

    /** 同步准备信息 */
    private GamerNotifyTeamReadyS2C()
    {
        this.teamData = Game.moduleModel.team.GetTeam();
        
        this.UpdateMembers();
    }

    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        this.m_listPlayer.numItems = 4;
    }

    /** 重置 */
    private Reset()
    {
        this.m_listPlayer.numItems = 0;
        this.m_listPlayer.itemPool.clear();
        this.m_listFriend.numItems = 0;
        this.m_listFriend.itemPool.clear();
        this.m_labAim.text = "请选择";
        
        this.m_btnHelp.selected  = false;
        this.m_btnAuto.selected  = false;
        this.m_btnReady.selected = false;
        this.m_btnEnterTeam.selected = false;

        this.teamData   = null;
        this.aimIndex   = 0;
        this.playerList = [];
        this.friendList = [];
        this.isSecretLand = false;
        this.ResetMatch();

        this.m_Filter.selectedIndex = 0;
        this.m_Status.selectedIndex = 0;
        this.m_View.selectedIndex = 0;
        this.m_Type.selectedIndex = 0;
    }

    /** 重置匹配 */
    private ResetMatch()
    {
        this.m_Status.selectedIndex = 0;
        this.m_btnAuto.selected = false;
    }

    /** 刷新成员 */
    private UpdateMembers()
    {
        let model = Game.moduleModel.team;
        // 队长无需准备
        this.m_btnReady.visible   = !model.IsLeader();
        this.m_Type.selectedIndex = model.IsLeader() ? 0 : 1;

        

        // 自己
        let teamer = Game.moduleModel.team.GetTeamer();
        
        this.m_btnAuto.selected      = (this.m_Status.selectedIndex == 1);
        this.m_btnHelp.selected      = teamer.isHelper;
        this.m_btnReady.selected     = teamer.isReady;
         


        // 成员
        let data = this.teamData;
        let members   = data.memberList;
        this.playerList = <Teamer[]>members;
        this.m_listPlayer.numItems  = 4;
        if (!this.m_btnAuto.selected) 
        {
            this.m_Status.selectedIndex = (members.length == 4) ? 2 : 0;
        }
    }

    /** 刷新目标 */
    private UpdateAim()
    {
        if (this.aimIndex) 
        {
            Game.moduleModel.team.matchCheckId = this.aimIndex;

            let point = Game.config.checkPoint.getConfig(this.aimIndex);
            this.m_labAim.text = point.name;
            this.isSecretLand  = (point.type == CheckPointType.SecretLand);
        } 

        if (this.teamData)
        {
            this.m_View.setSelectedPage(this.isSecretLand ? "secretland" : "normal");
        }
        else
        {
            this.m_View.setSelectedPage("base");
        }
    }

    /** 刷新状态 */
    private UpdateStatus()
    {
        let data = this.teamData;

        switch (data.status) {
            case TeamStatus.InMatching:
                this.m_Status.selectedIndex = 1;
                break;
            case TeamStatus.Normal:
                this.m_Status.selectedIndex = 0;
                this.m_btnAuto.selected = false;
                Game.moduleModel.team.matchStatus = false;
                break;
        
            default:
                break;
        }
    }

    /** 刷新好友 */
    private UpdateFriend()
    {
        return;

        let friendlist = this.friendList;
        if (this.m_Filter.selectedIndex == 0) 
        {
            // TODO 暂时写死  通过好友获取
            friendlist = [{name:"aaaa001", level:3, id: 10272},
                          {name:"aaaa002", level:4, id: 10271},
                          {name:"aaaa003", level:5, id: 10273},
                          {name:"aaaa004", level:5, id: 10274}];    
        } 
        else 
        {
            // TODO 暂时写死  通过军团获取
            friendlist = [{name:"bbb001", level:13, id: 10037},
                          {name:"bbb002", level:14, id: 10038},
                          {name:"bbb003", level:15, id: 10039}];  
        }

        for (let i = 0, len = friendlist.length; i < len; i++) 
        {
            let friend= friendlist[i];
            if (friend.id == Game.user.id) 
            {
                friendlist.splice(i, 1);
                break;
            }
        }

        this.friendList = friendlist;
        // this.m_listFriend.numItems = friendlist.length;
        // this.m_listFriend.refreshVirtualList();
    }

    /** 匹配超时 */
    private OverTime()
    {
        Game.system.toastText("匹配超时，未有合适队伍，请重新再试！");

        if (this.teamData) 
        {
            this.m_btnAuto.selected = false;
            this.TeamAuto();     
        }
        else
        {
            this.m_btnEnterTeam.selected = false;
            this.TeamEnter();  
        }
    }

    /** 创建队伍 */
    private CreateTeam()
    {
        if (this.m_Status.selectedIndex == 1) 
        {
            Game.system.toastText("匹配状态不可创建！");
            return;
        }

        let hero = this.playerList[0].hero;
        Game.sender.team.TeamMake(this.aimIndex, <GamerHero>hero);
    }

    private CreateTeamer()
    {
        let heroid = Game.moduleModel.hero.teamSelectHeroId;
        let hero = Game.moduleModel.hero.GetData(heroid);
        let user = Game.user;

        let teamer   = new Teamer();
        teamer.gamer = new GamerMini();
        teamer.gamer.name = user.name;
        teamer.gamer.id   = user.id;
        teamer.gamer.lsid = user.lsid;
        teamer.gamer.state= GamerStatus.Online;

        teamer.hero  = new GamerHero();
        teamer.hero.id    = hero.id;
        teamer.hero.level = hero.level;

        teamer.secretLand = Game.moduleModel.secretLand.infoData;
        
        this.playerList   = [teamer];
        this.m_listPlayer.numItems  = 4;
    }

    /*public----------------------外部接口---------------------------*/
    /** 开启界面 */
    public Open(): void
    {
        let model = Game.moduleModel.team;

        let team  = model.GetTeam();
        this.teamData = team;

        if (team) 
        {
            this.aimIndex = team.aim;

            this.UpdateAim();
            
            this.UpdateStatus();

            this.UpdateMembers();  
        } 
        else
        {
            this.aimIndex = model.matchCheckId;

            this.UpdateAim();

            this.CreateTeamer();

            this.m_Status.selectedIndex  = !model.IsMatching() ? 0 : 1;

            this.m_btnEnterTeam.selected = !model.IsMatching() ? false : true;
        }

        this.UpdateFriend();
    }

    /** 设置目标 */
    public SetCheckPoint(checkPointId:number)
    {
        this.aimIndex = checkPointId;
        this.UpdateAim();
    }
}