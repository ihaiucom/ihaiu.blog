/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattlePlanWindowUIStruct from "../../Generates/ModuleBattlePlan/BattlePlanWindowUIStruct";
import BattlePlanModel from "../../../GameModule/DataModels/BattlePlanModel";
import Game from '../../../Game';
import BtnTeamPanel from "./BtnTeamPanel";
import HeroPanel from "./HeroPanel";
import BattlePlanWindow from '../../../GameModule/ViewWindows/BattlePlanWindow';
import Log from "../../../GameFrame/Log/Log";
import GameEventKey from "../../../GameEventKey";
import { UID } from "../../../GameWar/CoreLib/ECS/UID";
import { MenuId } from "../../../GameModule/MenuId";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GuideData from "../../../GameModule/DataStructs/GuideData";

export default class BattlePlanWindowUI extends BattlePlanWindowUIStruct
{
    checkpointId: number;
    static readonly heroMaxNum = 3;

    static readonly defaultTeamIndex = 1;

    moduleWindow: BattlePlanWindow;
    /** 当前队伍的下标,视图list的下标 */
    public nowSelectTeamIndex : number = -1;
    /** 对应总数据 */
    public model : BattlePlanModel;

    public mapTeamUid2TeamPanel : Map<int, BtnTeamPanel> = new Map<int, BtnTeamPanel>();

    private nowState = "normal";

    private _centerBeforeParent : any = null;

    onWindowInited(): void
    {
        // this._centerBeforeParent = null;        
    }
    /**
     * 
     * @param nowstate 当前的状态，normal一般是普通编队的情况,battleChoose表示有右下角的按钮
     */
    onMenuOpen(nowstate : string = "normal")
    {
        this.nowState = nowstate;
    }

    // 窗口显示
    onWindowShow(): void
    {   
        this.checkpointId = this.moduleWindow.menuParameter.args[0];
        this.mapTeamUid2TeamPanel.clear();
        this.model = Game.moduleModel.battlePlan;
        this.model.Init();
        // TODO 暂时做在这里
        // this.m_com_windowHead.m_btnReturn.onClick(this, this.Close);
        this.m_com_windowHead.SetWindow(MenuId.BattlePlan);
        let list = Game.config.heroTeam.getConfigList();
        this.m_list_hero.setItemRenderer(this.RenderHeroList, this);
        this.m_list_team.setItemRenderer(this.RenderTeamList, this);
        
        this.m_list_team.on(fgui.Events.CLICK_ITEM, this, this.TeamListOnClick);
        this.m_btn_changeName.onClick(this, this.OpenChangeNamePanel);

        this.m_list_team.numItems = list.length;
        this.m_list_hero.numItems = BattlePlanWindowUI.heroMaxNum;
        this.m_btn_BattleCentern.onClick(this, this.TeamCentern);
        this.m_btn_DuelTemp.onClick(this, this.OnClickDuelTempBtn);

        Game.event.add(GameEventKey.GameFrame_BattlePlanDataUpdate, this.RefreshAllTeamView, this);
        Game.event.add(GameEventKey.GameFrame_BattlePlanUnlockNewTeam, this.UnlockNewTeam, this);
        Game.event.add(GameEventKey.GameFrame_BattlePlanChangeTeamName, this.RefreshTeamName, this);
        Game.event.add(GameEventKey.GameFrame_BattlePlanChangeHero, this.RefreshOneHeroMsg, this);//
        Game.event.add(GameEventKey.GameFrame_BattlePlanUnlockNewHeroChair, this.RefreshAllHero, this);
        Game.event.add(GameEventKey.GameFrame_BattlePlanRefreshCommonSkill, this.RefreshSkill, this);
        this.nowSelectTeamIndex < 0 ? this.m_list_hero.visible = false : this.m_list_hero.visible = true;
        this.m_state.setSelectedPage(this.nowState);
        
        if(this.nowSelectTeamIndex == -1)
        {
            this.SetNewSelectedTeam(0);
        }

        Laya.timer.once(50, this, this.CheckGuide);

        // Laya.timer.once(2000, this, this.FGUIlistTest);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_com_windowHead.m_btnReturn.offClick(this, this.Close);
        this.m_list_hero.itemRenderer.clear();
        this.m_list_team.itemRenderer.clear();
        this.m_list_team.off(fgui.Events.CLICK_ITEM, this, this.TeamListOnClick);
        this.m_btn_changeName.offClick(this, this.OpenChangeNamePanel);
        this.m_btn_BattleCentern.offClick(this, this.TeamCentern);
        this.m_btn_DuelTemp.offClick(this, this.OnClickDuelTempBtn);

        Game.event.remove(GameEventKey.GameFrame_BattlePlanDataUpdate, this.RefreshAllTeamView, this);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanUnlockNewTeam, this.UnlockNewTeam, this);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanChangeTeamName, this.RefreshTeamName, this);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanChangeHero, this.RefreshOneHeroMsg, this);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanUnlockNewHeroChair, this.RefreshAllHero, this);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanRefreshCommonSkill, this.RefreshSkill, this);

        this.Reset();
    }
    /** 刷新所有英雄信息 */
    public RefreshAllHero()
    {
        this.m_list_hero.numItems = BattlePlanWindowUI.heroMaxNum;
    }
    /**
     * 刷新一个英雄的信息
     * @param pos 所在的第几个位置
     */
    public RefreshOneHeroMsg(pos : number, teamUid : number)
    {
        let btnTeamPanel = this.mapTeamUid2TeamPanel.get(teamUid);
        if(!btnTeamPanel)
        {
            Log.Warn("未找到Uid为", teamUid, "的对应UI");
            return;
        }
        if(btnTeamPanel.teamIndex != this.nowSelectTeamIndex)
        {
            return;
        }
        let heroPanel = this.m_list_hero.getChildAt(pos) as HeroPanel;
        if(!heroPanel)
        {
            Log.Warn("未找到pos为", pos, "的对应英雄面板UI");
        }
        heroPanel.RefreshHero(teamUid);
        
        // TODO 新手引导
        this.CheckGuide();
    }
    /**
     * 解锁新的队伍
     * @param teamIndex 
     */
    public UnlockNewTeam(teamUid : number)
    {
        let btnTeamPanel = this.mapTeamUid2TeamPanel.get(teamUid);
        if(!btnTeamPanel)
        {
            return;
        }
        btnTeamPanel.UnLockTeam(teamUid);
    }
    /**
     * 设置最新选中的队伍
     * @param teamIndex 
     */
    public SetNewSelectedTeam(teamIndex : number)
    {        
        if(this.nowSelectTeamIndex >= 0)
        {
            let beforeItem = this.m_list_team.getChildAt(this.nowSelectTeamIndex) as BtnTeamPanel;
            beforeItem.UnChooseTeam();
        }
        this.nowSelectTeamIndex = teamIndex;
        if(this.nowSelectTeamIndex >= 0)
        {
            let beforeItem = this.m_list_team.getChildAt(this.nowSelectTeamIndex) as BtnTeamPanel;
            beforeItem.ChooseTeam();
        }
        this.m_list_hero.visible = true;
        this.RefreshAllHero();

        let nowItem = this.m_list_team.getChildAt(this.nowSelectTeamIndex) as BtnTeamPanel;

        let model = Game.moduleModel.battlePlan;
        model.nowSelectTeam = nowItem.teamUid;
    }

    /**
     * 刷新队伍的名字
     * @param teamIndex 
     */
    public RefreshTeamName(teamIndex : number)
    {
        let item = this.mapTeamUid2TeamPanel.get(teamIndex);
        if(!item)
        {
            Log.Error("更换队伍名字对应的ID不存在，index为", teamIndex)
        }
        item.RefreshName();
    }
    /**
     * 确认选中队伍，发送对应事件给外部的东西
     */
    private TeamCentern()
    {
        let teamUid = this.GetNowSelectTeamUid(this.nowSelectTeamIndex);
        if(teamUid == -1)
        {
            return ;
        }
        let model = Game.moduleModel.battlePlan;
        let data = model.GetTeamInfo(teamUid);
        let values = data.heroGroupPosDict.getValues();
        let num = 0;
        for(let item of values)
        {
            if(item.heroId != 0)
            {
                num++;
            }
        }
        if(num <= 0)
        {
            // Game.system.alertText("挑战的队伍必须选择一个英雄");
            Game.system.BattlePlanDialogWarnHit();
            return;
        }
        // Game.moduleModel.section.launchGameWithTeamUid(teamUid);
        // console.log(data);
        let heroGroupData = Game.moduleModel.battlePlan.GetTeamInfo(teamUid);
        let heroList = [];
        for(let data of heroGroupData.posList)
        {
            if(data.heroId)
                heroList.push(data.heroId);
        }
        if(!this.checkpointId)
            console.warn("没有关卡id");
        Game.moduleModel.section.checkpointId = this.checkpointId;
        Game.moduleModel.section.launchGame(0, teamUid);
        // Game.menu.close(this.moduleWindow.menuId);
        // console.log(GameEventKey.GameFrame_BattlePlanTeamCentern);

        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanTeamCentern, [teamUid]);
        // this.Close();
    }

     /**
     * 确认选中队伍，发送对应事件给外部的东西
     */
    private OnClickDuelTempBtn()
    {
        let teamUid = this.GetNowSelectTeamUid(this.nowSelectTeamIndex);
        if(teamUid == -1)
        {
            return ;
        }
        let model = Game.moduleModel.battlePlan;
        let data = model.GetTeamInfo(teamUid);
        let values = data.heroGroupPosDict.getValues();
        let num = 0;
        for(let item of values)
        {
            if(item.heroId != 0)
            {
                num++;
            }
        }
        if(num <= 0)
        {
            // Game.system.alertText("挑战的队伍必须选择一个英雄");
            
            return;
        }
        Game.moduleModel.pvp.SetHeroGroupUid(teamUid);
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanSelectedTeam);
        this.moduleWindow.menuBack();
    }

    /** 打开改名的二级页面 */
    private OpenChangeNamePanel()
    {
        if(this.nowSelectTeamIndex == -1)
        {
            return;
        }
        let item = this.m_list_team.getChildAt(this.nowSelectTeamIndex) as BtnTeamPanel;
        if(!item)
        {
            return;
        }
        Game.system.BattlePlanDialogChangeTeamName(item.teamUid);
    }

    /**
     * 关闭当前界面
     */
    private Close()
    {
        this.moduleWindow.menuBack();
    }
    /**
     * 队伍列表按钮
     * @param item 
     */
    private TeamListOnClick(item : BtnTeamPanel)
    {
        item.PanelOnClick();   
    }
    /**
     * 渲染队伍列表
     * @param index 
     * @param btnTeamPanel 
     */
    private RenderTeamList(index : number, btnTeamPanel : BtnTeamPanel)
    {
        let model = Game.moduleModel.battlePlan;
        let teamUid = Game.config.heroTeam.configList[index].id;
        
        if(Number.isNaN(teamUid))
        {
            Log.Error("配置表里某个字段的ID值不为数字");
            teamUid = -1;
        }
        let data = model.GetTeamInfo(teamUid);
        this.mapTeamUid2TeamPanel.set(teamUid, btnTeamPanel);
        btnTeamPanel.Init(index, data, teamUid, this);
        if(index == this.nowSelectTeamIndex)
        {
            this.SetNewSelectedTeam(index);
        }
    }
    /**
     * 初始化所有的队伍
     */
    private RefreshAllTeamView()
    {
        let len = Game.config.heroTeam.configList.length;
        this.m_list_hero.numItems = len;
        this.SetNewSelectedTeam(0);
    }
    /**
     * 刷新技能
     * @param teamUid 
     * @param pos 
     * @param skillIndex 
     */
    private RefreshSkill(teamUid : number, pos : number, skillIndex : number)
    {
        let nowTeamUid = this.GetNowSelectTeamUid(this.nowSelectTeamIndex);
        if(nowTeamUid != teamUid)
        {
            return;
        }
        let heroItem = this.m_list_hero.getChildAt(pos) as HeroPanel;
        if(!heroItem)
        {
            return;
        }
        heroItem.ChangeCommonSkill(skillIndex);
    }

    /**
     * 渲染英雄列表
     * @param index 
     * @param obj 
     */
    private RenderHeroList(index : number, heroPanel : HeroPanel)
    {
        if(this.nowSelectTeamIndex < 0)
        {
            return;
        }
        let item = this.m_list_team.getChildAt(this.nowSelectTeamIndex) as BtnTeamPanel;
        let teamUid = item.teamUid;
        heroPanel.Init(index, teamUid);
    }
    /**
     * 获取当前index对应的teamUID
     * @param index 列表的下标
     */
    private GetNowSelectTeamUid(index : number) : number
    {
        let res = -1;
        if(index < 0)
        {
            return -1;
        }
        let item = this.m_list_team.getChildAt(index) as BtnTeamPanel;
        if(item)
        {
            res = item.teamUid;
        }
        return res;

    }

    public CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        }

        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
        if(data && !data.isOver)
        {
            let info = Game.moduleModel.battlePlan.GetTeamInfo(1);
            
            if(info.GetHeroCount() <= 1)
            {
                data.SetGuideProgress(3);
                this.GuideBattleSecondHero(data);
            }
            else if(info.GetHeroCount() >= 1)
            {
                data.SetGuideProgress(6);
                this.GuideBattle(data);
            }
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_2);
        if(data&& !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_3);
        if(data&& !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_4);
        if(data&& !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_6);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_2_1);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        }


        data = model.GetData(GuideGroup.BATTLE_ENTER_SPECIAL_1);
        if(data && !data.isOver) // && data.CheckProgress(3)
        {
            this.GuideBattle(data);
        } 
    }

    /**
     * 战斗引导
     */
    public GuideBattle(data: GuideData)
    {
        if(data)
        {
            let obj = this.m_btn_BattleCentern;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);//obj.parent.localToGlobal(obj.x, obj.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);

            // let beforeParent = this.m_btn_BattleCentern.parent;
            this._centerBeforeParent = this.m_btn_BattleCentern.parent;

            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_BattlePlanTeamCentern, this.FinishGuide, this);
            Game.event.add(GameEventKey.GameFrame_SectionFinishSuccess, this.FinishBattlePlan, this);
            // obj.onClick(this, this.FinishGuide, [obj, beforeParent]);
        }
    }

    private FinishGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        GuideHelper.ChangeObjParent(this.m_btn_BattleCentern, this._centerBeforeParent);
        Game.system.guideMgr.HideGuideDialog();
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanTeamCentern, this.FinishGuide, this);
        // obj.offClick(this, this.FinishGuide);
    }

    /**
     * 引导上阵第二个英雄
     * @param data 
     */
    public GuideBattleSecondHero(data: GuideData)
    {
        if(data)
        {
            let sectionIndex = 1;
            let list = this.m_list_hero;
            let item = list.getChildAt(sectionIndex) as HeroPanel;
            let obj = item.m_btn_centerChooseHero;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);//obj.parent.localToGlobal(obj.x, obj.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);

            this._centerBeforeParent = obj.parent;
            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_BattlePlanSecondHero, this.FinishSecondHeroGuide, this);
        }
    }

    private FinishSecondHeroGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let sectionIndex = 1;
        let item = this.m_list_hero.getChildAt(sectionIndex) as HeroPanel;
        let obj = item.m_btn_centerChooseHero;
        GuideHelper.ChangeObjParent(obj, this._centerBeforeParent);
        Game.system.guideMgr.HideGuideDialog();
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanSecondHero, this.FinishSecondHeroGuide, this);
    }

    private FinishBattlePlan()
    {
        Game.system.guideMgr.GoToNextStop();
    }
    private Reset()
    {
        this.m_list_team.numItems = 0;
        this.m_list_team.itemPool.clear();
        this.m_list_hero.numItems = 0;
        this.m_list_hero.itemPool.clear();
    
        this.nowState = "normal";
        this.model = null;
        this.mapTeamUid2TeamPanel.clear();
        this.checkpointId = -1;
    }
}