import SystemMessag from "../GameFrame/System/SystemMessage";
import HeroLevelUpDialog from "../FGUI/Extends/ModuleHero/HeroLevelUpDialog";
import DraugInfoDialog from "../FGUI/Extends/ModuleDraug/DraugInfoDialog";
import DraugData from "./DataStructs/DraugData";
import EquipLevelUpDialog from "../FGUI/Extends/ModuleEquip/EquipLevelUpDialog";
import EquipStarUpDialog from "../FGUI/Extends/ModuleEquip/EquipStarUpDialog";
import { EnumDraugDialogType } from "./DataEnums/EnumDraugDialogType";
import ItemData from "./DataStructs/ItemData";
import TeamSelectDialog from "../FGUI/Extends/ModuleTeam/TeamSelectDialog";
import EquipSelectDialog from "../FGUI/Extends/ModuleEquip/EquipSelectDialog";
import Game from "../Game";
import BattlePlanDialog from "../FGUI/Extends/ModuleBattlePlan/BattlePlanDialog";
import SystemObtainDialog from '../FGUI/Extends/SystemModuleDialog/SystemObtainDialog';
import {EquipData} from "./DataStructs/EquipData";
import TeamPlayerDialog from "../FGUI/Extends/ModuleTeam/TeamPlayerDialog";
import Teamer = proto.Teamer;
import SystemItemDialog from "../FGUI/Extends/SystemModuleDialog/SystemItemDialog";
import EquipTipDialog from "../FGUI/Extends/CommonGame/ItemEquipTipsDialog";
import CommonSkillDialog from "../FGUI/Extends/ModuleBattlePlan/CommonSkillDialog";
import HomeHeroDialog from "../FGUI/Extends/SystemModuleHome/HomeHeroDialog";
import SystemTeamInviteDialog from "../FGUI/Extends/SystemModuleDialog/SystemTeamInviteDialog";
import IGameItem = proto.IGameItem;
import { GuideMgr } from "./GuideModule/GuideMgr";
import HomeOpenDialog from "../FGUI/Extends/SystemModuleHome/HomeOpenDialog";
import DraugTipsDialog from "../FGUI/Extends/ModuleDraug/DraugTipsDialog";
import HeroSkillTipsDialog from "../FGUI/Extends/ModuleHero/HeroSkillTipsDialog";
import HeroSkillLevelUpDialog from "../FGUI/Extends/ModuleHero/HeroSkillLevelUpDialog";
import TestWarView from "../FGUI/Extends/GameTestView/TestWarView";
import SystemCanGetDialog from "../FGUI/Extends/SystemModuleDialog/SystemCanGetDialog";
//======================
// 消息对话框API
//----------------------
export default class GameSystemMessag extends SystemMessag
{
    

    // //英雄升级提示框
    // private _heroLevelUpDialog: HeroLevelUpDialog;
    // private get heroLevelUpDialog(): HeroLevelUpDialog
    // {
    //     if (!this._heroLevelUpDialog) {
    //         this._heroLevelUpDialog = HeroLevelUpDialog.createInstance();
    //     }

    //     return this._heroLevelUpDialog;
    // }

    // heroLevelUpShow(id: number, funCloseCall? : Function, context? : any)
    // {
    //     return this.heroLevelUpDialog.open(id, funCloseCall, context);
    // }

    //战魂点击弹框
    private _draugInfoDialog: DraugInfoDialog;
    private get draugInfoDialog(): DraugInfoDialog
    {
        if (!this._draugInfoDialog) 
        {
            this._draugInfoDialog = DraugInfoDialog.createInstance();
        }

        return this._draugInfoDialog;
    }

    draugInfoDialogShow(maindraugdata: DraugData, vicedraugdata: DraugData, type?:EnumDraugDialogType)
    {
        return this.draugInfoDialog.open(maindraugdata, vicedraugdata, type);
    }


    //装备升级提示框
    private _equipLevelUpDialog: EquipLevelUpDialog;
    private get equipLevelUpDialog(): EquipLevelUpDialog
    {
        if (!this._equipLevelUpDialog) {
            this._equipLevelUpDialog = EquipLevelUpDialog.createInstance();
        }

        return this._equipLevelUpDialog;
    }

    equipLevelUpShow(list: Array<int>, func: Function, isLevelUp: boolean = false)
    {
        return this.equipLevelUpDialog.open(list, func, isLevelUp);
    }

    //装备升星提示框
    private _equipStarUpDialog: EquipStarUpDialog;
    private get equipStarUpDialog(): EquipStarUpDialog
    {
        if (!this._equipStarUpDialog) {
            this._equipStarUpDialog = EquipStarUpDialog.createInstance();
        }

        return this._equipStarUpDialog;
    }


    equipStarUpShow(uid:int, func: Function)
    {
        return this.equipStarUpDialog.open(uid, func);
    }

    //英雄穿装备选择框
    private _equipSelectDialog: EquipSelectDialog;
    private get equipSelectDialog(): EquipSelectDialog
    {
        if (!this._equipSelectDialog) {
            this._equipSelectDialog = EquipSelectDialog.createInstance();
        }

        return this._equipSelectDialog;
    }

    equipSelectShow(id: int, pos: int)
    {
        return this.equipSelectDialog.open(id, pos);
    }

    private _equipTip:EquipTipDialog;
    private get equipTip():EquipTipDialog
    {
        if (!this._equipTip) {
            this._equipTip = EquipTipDialog.createInstance();
        }
        return this._equipTip;
    }
    equipTipShow(data: EquipData,showItemChange: boolean = true)
    {
        return this.equipTip.open(data,showItemChange);
    }

    //公共物品获取提示框
    private _systemItemDialog: SystemItemDialog;
    private get systemItemDialog(): SystemItemDialog
    {
        if (!this._systemItemDialog) {
            this._systemItemDialog = SystemItemDialog.createInstance();
        }

        return this._systemItemDialog;
    }

    SystemItemShow(itemdatas:ItemData[] | IGameItem[])
    {
        return this.systemItemDialog.open(itemdatas);
    }

    //公共可获取提示框
    private _systemCanGetDialog: SystemCanGetDialog;
    private get systemCanGetDialog(): SystemCanGetDialog
    {
        if (!this._systemCanGetDialog) {
            this._systemCanGetDialog = SystemCanGetDialog.createInstance();
        }

        return this._systemCanGetDialog;
    }

    SystemCanGetDialog(itemdatas:ItemData[] | IGameItem[], text:string)
    {
        return this.systemCanGetDialog.open(itemdatas, text);
    }

    //组队关卡选择提示框
    private _teamSelectDialog: TeamSelectDialog;
    private get teamSelectDialog(): TeamSelectDialog
    {
        if (!this._teamSelectDialog) {
            this._teamSelectDialog = TeamSelectDialog.createInstance();
        }

        return this._teamSelectDialog;
    }

    TeamSelectShow(aimIndex:number)
    {
        return this.teamSelectDialog.open(aimIndex);
    }

    // 组队玩家信息查看框
    private _teamplayerDialog: TeamPlayerDialog;
    private get teamplayerDialog(): TeamPlayerDialog
    {
        if (!this._teamplayerDialog) {
            this._teamplayerDialog = TeamPlayerDialog.createInstance();
        }

        return this._teamplayerDialog;
    }

    TeamPlayerShow(teamer:Teamer)
    {
        return this.teamplayerDialog.open(teamer);
    }
    
    private _battlePlanDialog : BattlePlanDialog;
    private get battlePlanDialog() : BattlePlanDialog
    {
        if(!this._battlePlanDialog)
        {
            this._battlePlanDialog = BattlePlanDialog.createInstance();
        }
        return this._battlePlanDialog;
    }

    /**
     * 备战打开解锁队伍界面
     * @param teamIndex 
     */
    BattlePlanDialogUnLockTeam(teamIndex : number)
    {
        return this.battlePlanDialog.OpenUnlockTeamDialog(teamIndex);
    }
    /**
     * 备战打开改名界面
     * @param teamIndex 
     */
    BattlePlanDialogChangeTeamName(teamIndex : number)
    {
        return this.battlePlanDialog.OpenChangeTeamName(teamIndex);
    }

    /**
     * 备战打开改名界面
     * @param teamIndex 
     */
    BattlePlanDialogWarnHit()
    {
        return this.battlePlanDialog.OpenWarnHit();
    }

    private _commonSkillListDialog : CommonSkillDialog;
    private get commonSkillDialog() : CommonSkillDialog
    {
        if(!this._commonSkillListDialog)
        {
            this._commonSkillListDialog = CommonSkillDialog.createInstance();
        }
        return this._commonSkillListDialog;
    }

    /**
     * 创建公共技能选取界面
     * @param chooseIndex 之前选择的技能
     * @param teamIndex 打开英雄的队伍下表
     * @param teamHeroPos 打开队伍的英雄pos
     */
    CommonSkillDialog(chooseIndex : number = -1, teamIndex : number, teamHeroPos : number)
    {
        return this.commonSkillDialog.OpenPanel(chooseIndex, teamIndex ,teamHeroPos);
    }

    private _obtainDialog: SystemObtainDialog;
    private get obtainDialog(): SystemObtainDialog
    {
        if(!this._obtainDialog)
        {
            this._obtainDialog = SystemObtainDialog.createInstance();
        }
        return this._obtainDialog;
    }

    /** 获取途径 */
    SystemObtainShow(id: number)
    {
        return this.obtainDialog.showObtainWaysWithId(id);
    }

    //主界面英雄body列表
    private _homeHeroDialog: HomeHeroDialog;
    private get homeHeroDialog(): HomeHeroDialog
    {
        if (!this._homeHeroDialog) {
            this._homeHeroDialog = HomeHeroDialog.createInstance();
        }

        return this._homeHeroDialog;
    }

    homeHeroShow()
    {
        return this.homeHeroDialog.open();
    }
    
    /** 组队邀请 */
    private _teamInviteDialog: SystemTeamInviteDialog;
    private get teamInviteDialog(): SystemTeamInviteDialog
    {
        if(!this._teamInviteDialog)
        {
            this._teamInviteDialog = SystemTeamInviteDialog.createInstance();
        }
        return this._teamInviteDialog;
    }

    TeamInviteShow(teamId:number, inviteId:number)
    {
        return this.teamInviteDialog.open(teamId, inviteId);
    }

    private _guideMgr : GuideMgr;
    public get guideMgr() : GuideMgr
    {
        if(!this._guideMgr)
        {
            this._guideMgr = new GuideMgr();
        }
        return this._guideMgr;
    }

    /** 功能开启 */
    private _homeOpenDialog: HomeOpenDialog;
    private get homeOpenDialog(): HomeOpenDialog
    {
        if(!this._homeOpenDialog)
        {
            this._homeOpenDialog = HomeOpenDialog.createInstance();
        }
        return this._homeOpenDialog;
    }

    HomeOpenShow(menu:number)
    {
        return this.homeOpenDialog.open(menu);
    }

    /** 战魂Tips */
    private _draugTipsDialog: DraugTipsDialog;
    private get draugTipsDialog(): DraugTipsDialog
    {
        if(!this._draugTipsDialog)
        {
            this._draugTipsDialog = DraugTipsDialog.createInstance();
        }
        return this._draugTipsDialog;
    }

    DraugTipsShow(type:number)
    {
        return this.draugTipsDialog.open(type);
    }
    /** 英雄技能tips */
    private _heroSkillTipsDialog: HeroSkillTipsDialog;
    private get heroSkillTipsDialog(): HeroSkillTipsDialog
    {
        if(!this._heroSkillTipsDialog)
        {
            this._heroSkillTipsDialog = HeroSkillTipsDialog.createInstance();
        }
        return this._heroSkillTipsDialog;
    }

    HeroSkillTipsShow(heroID: int, skillID: int)
    {
        return this.heroSkillTipsDialog.open(heroID, skillID);
    }

    /** 英雄技能升级弹窗 */
    private _heroSkillLevelUpDialog: HeroSkillLevelUpDialog;
    private get heroSkillLevelUpDialog(): HeroSkillLevelUpDialog
    {
        if(!this._heroSkillLevelUpDialog)
        {
            this._heroSkillLevelUpDialog = HeroSkillLevelUpDialog.createInstance();
        }
        return this._heroSkillLevelUpDialog;
    }

    HeroSkillLevelUpShow(heroID: int, skillID: int)
    {
        return this.heroSkillLevelUpDialog.open(heroID, skillID);
    }

    private _testViewDialog : TestWarView;
    private get testViewDialog() : TestWarView
    {
        if(!this._testViewDialog)
        {
            this._testViewDialog = TestWarView.createInstance();
        }
        return this._testViewDialog;
    }

    OpenTestViewSetting()
    {
        return this.testViewDialog.Open();
    }
}