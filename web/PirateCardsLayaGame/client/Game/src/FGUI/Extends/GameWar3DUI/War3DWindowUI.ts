/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import War3DWindowUIStruct from "../../Generates/GameWar3DUI/War3DWindowUIStruct";
import WarWindow from "../../../GameModule/ViewWindows/WarWindow";
import Game from "../../../Game";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GameEventKey from "../../../GameEventKey";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { War } from "../../../GameWar/Logic/War";
import { LauncherParameter } from "../../../GameWar/Logic/Struct/LauncherParameter";

export default class War3DWindowUI extends War3DWindowUIStruct
{
    /** 窗口 */
    moduleWindow: WarWindow;

    private _joystickBeforeParent : any = null;

    private _attackBeforeParent : any = null;

    private _firSkillBeforeParent : any = null;

    private _monsterCreatedCount : number = 0;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    onWindowShow() : void
    {
        this.m_SMonsterView.visible = false;
        this.m_BossView.visible = false;
        this.m_heroView.m_btnSetting.visible = true;
        this.m_ReviveView.visible = false;

        Game.event.add(GameEventKey.GameFrame_GuideBattleEndRemove, this.OnBattleEndRemoveGuide, this)

        Laya.timer.once(50, this, this.CheckGuide);
        // this.GuideBattle();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        Game.event.remove(GameEventKey.GameFrame_GuideBattleEndRemove, this.OnBattleEndRemoveGuide, this)
    }

    public Init(launcher : LauncherParameter)
    {
        this.m_ReviveView.Init(launcher);
    }

    public SetBossViewState(isShow : boolean)
    {
        if(isShow)
        {
            this.m_BossView.visible = true;
        }
        else
        {
            this.m_BossView.visible = false;
        }
    }

    /**
     * 设置复活面板显示
     * @param val 
     */
    public SetAliveView(val : boolean)
    {
        this.m_ReviveView.SetVisiable(val);
    }

    /**
     * 减少复活次数
     */
    public ReduceAliveTime()
    {
        this.m_ReviveView.ReduceRestRevive();
    }

    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(data && !data.isOver) // && data.progress == 4
        {
            this.CheckIsJoystickGuide();
            this.m_joystickView.visible = false;
            this.m_skillView.visible = false;
            this.m_heroView.m_btnSetting.visible = false;
            // Game.system.guideMgr.ShowGuideDialog(0, 0, 0, 0);
        }
        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
        if(data && !data.isOver) // && data.CheckProgress(6)
        {
            this.CheckIsChangeGuide();
        }

    }

    /**
     * 检查是否应该进入引导
     */
    private CheckIsChangeGuide() : boolean
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        Game.event.add(GameEventKey.GameFrame_gameStart, this.DoChangeGuide, this);
        // this.DoGuide();
    }

    private _beforListItem : any = null;

    private DoChangeGuide()
    {
        let btn = this.m_heroView.m_listHero.getChildAt(1);
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn, 1);// btn.parent.localToGlobal(btn.x, btn.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
        this._beforListItem = this.m_heroView.m_listHero.getChildAt(1);
        GuideHelper.FguiListChangeByIndex(1, this.m_heroView.m_listHero, this.m_heroView['ItemHeroClick'], this.m_heroView);
        Game.event.add(GameEventKey.GameFrame_GuideChangeHero, this.ChangeGuideFinish, this);
        Game.event.remove(GameEventKey.GameFrame_gameStart, this.DoChangeGuide, this);
            
    }

    private ChangeGuideFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "War3DWindowUI, ChangeGuideFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.system.guideMgr.HideGuideDialog();
        Game.event.remove(GameEventKey.GameFrame_GuideChangeHero, this.ChangeGuideFinish, this);
        this._beforListItem = null;
    }

    /**
     * 检查是否应该进入引导
     */
    private CheckIsJoystickGuide() : boolean
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        Game.event.add(GameEventKey.GameFrame_gameStart, this.DoJoystickGuide, this);
        // this.DoGuide();
    }

    /** 执行遥感引导 */
    private DoJoystickGuide()
    {
        this.m_heroView.m_btnSetting.visible = false;
        this.m_joystickView.visible = true;
        // this._isGuiding = true;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this.m_joystickView); //this.parent.localToGlobal(this.x, this.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);

        this._joystickBeforeParent = this.m_joystickView.parent;
        GuideHelper.ChangeObjParent(this.m_joystickView, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_GuideJoystickFinish, this.FinishJoyStickGuide, this);
        Game.event.remove(GameEventKey.GameFrame_gameStart, this.DoJoystickGuide, this);
        // Game.event.add(GameEventKey.GameFrame_GuideFirSkillEnd, this.JoystickBack, this);
    }

    /** 结束joystick引导 */
    private FinishJoyStickGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
        Game.event.remove(GameEventKey.GameFrame_GuideJoystickFinish, this.FinishJoyStickGuide, this);
        Game.event.add(GameEventKey.GameFrame_BattleOneWave, this.GuideAttack, this);
        
        
    }
    
    /** joystick返回到之前的节点 */
    private JoystickBack()
    {
        if(!this._joystickBeforeParent)
        {
            GameLog.Log(EnumLogLevel.Error, "JoystickView, JoystickBack error");
        }
        GuideHelper.ChangeObjParent(this.m_joystickView, this._joystickBeforeParent);
        this._joystickBeforeParent = null
        // Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.JoystickBack, this);
    }


     /**
     * 引导攻击按钮
     */
    private GuideAttack()
    {
        this.m_skillView.visible = true;
        this.m_skillView.m_btnSkillFir.visible = false;
        this.m_skillView.m_btnSkillFou.visible = false;
        this.m_skillView.m_btnSkillSec.visible = false;
        this.m_skillView.m_btnSkillThi.visible = false;
        this.m_skillView.m_btnJump.visible = false;

        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this.m_skillView.m_btnAttack);//this.m_btnAttack.parent.localToGlobal(this.m_btnAttack.x, this.m_btnAttack.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);

        this._attackBeforeParent = this.m_skillView.m_btnAttack.parent;
        GuideHelper.ChangeObjParent(this.m_skillView.m_btnAttack, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_GuideAttackFinish, this.BtnAttackFinish, this);
        Game.event.add(GameEventKey.GameFrame_GuideFirSkillStart, this.BtnAttackBack, this);
        Game.event.remove(GameEventKey.GameFrame_BattleOneWave, this.GuideAttack, this);
        
    }

    /**
     * 攻击按钮返回给原来层级
     */
    private BtnAttackBack()
    {
        if(!this._attackBeforeParent)
        {
            GameLog.Log(EnumLogLevel.Error, "Skillview, BtnAttackBack error");
            return
        }

        GuideHelper.ChangeObjParent(this.m_skillView.m_btnAttack, this._attackBeforeParent);
        this._attackBeforeParent = null;
        this.FirSkillGuide();
        // Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.BtnAttackBack, this);

    }

    private BtnAttackFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
        Game.system.guideMgr.HideGuideDialog();
        Game.event.remove(GameEventKey.GameFrame_GuideAttackFinish, this.BtnAttackFinish, this);
        // Game.event.add(GameEventKey.GameFrame_GuideFirSkillStart, this.FirSkillGuide, this);
        // Game.event.dispatch(GameEventKey.GameFrame_GuideFirSkillStart);
    }
    
    /**
     * 开始引导
     */
    public FirSkillGuide()
    {
        this.m_skillView.m_btnSkillFir.visible = true;
        this.m_skillView.m_btnSkillFou.visible = false;
        this.m_skillView.m_btnSkillSec.visible = false;
        this.m_skillView.m_btnSkillThi.visible = false;
        this.m_skillView.m_btnJump.visible = false;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this.m_skillView.m_btnSkillFir);//this.parent.localToGlobal(this.x, this.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);
        // this._firSkillBeforeParent = this.parent;
        this._firSkillBeforeParent = this.m_skillView.m_btnSkillFir.parent;
        GuideHelper.ChangeObjParent(this.m_skillView.m_btnSkillFir, Game.system.guideMgr.otherNode);
        // Game.event.remove(GameEventKey.GameFrame_GuideFirSkillStart, this.FirSkillGuide, this);
        Game.event.add(GameEventKey.GameFrame_GuideFirSkillEnd, this.FinishFirSkillGuide, this);
    }

    private FinishFirSkillGuide()
    {
        if(!this._firSkillBeforeParent)
        {
            GameLog.Log(EnumLogLevel.Error, "skillNormalButton， FinishFirSkillGuide");
            return;
        }
        GuideHelper.ChangeObjParent(this.m_skillView.m_btnSkillFir, this._firSkillBeforeParent);
        this._firSkillBeforeParent = null;

        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
        Game.system.guideMgr.HideGuideDialog();

        
        this.m_skillView.m_btnSkillFou.visible = true;
        this.m_skillView.m_btnSkillSec.visible = true;
        this.m_skillView.m_btnSkillThi.visible = true;
        this.m_skillView.m_btnJump.visible = true;

        Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.FinishFirSkillGuide, this);
        // this.BtnAttackBack();
        this.JoystickBack();
    }

    private _isDispatchAttackStart = false;

    private _isDispatchFirSkill = false;

    public AddMonsterWave()
    {
        this._monsterCreatedCount++;
        // TODO 第一关的第一波只有两只
        if(this._monsterCreatedCount > 0 && this._monsterCreatedCount < 2 && !this._isDispatchAttackStart)
        {
            this._isDispatchAttackStart = true;
            Game.event.dispatch(GameEventKey.GameFrame_BattleOneWave);
            return;
        }
        //
        else if(!this._isDispatchFirSkill && this._monsterCreatedCount > 2)
        {
            this._isDispatchFirSkill = true;
            Game.event.dispatch(GameEventKey.GameFrame_GuideFirSkillStart);
            return;
        }
    }

    // 战斗失败还原所有按钮
    OnBattleEndRemoveGuide()
    {
        this._monsterCreatedCount = 0;
        this._isDispatchAttackStart = false;
        this._isDispatchFirSkill = false;

        Game.event.remove(GameEventKey.GameFrame_GuideBattleEndRemove, this.OnBattleEndRemoveGuide, this)
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(data && !data.isOver)
        {
            Game.system.guideMgr.HideGuideDialog();

            if(this._joystickBeforeParent)
            {
                GuideHelper.ChangeObjParent(this.m_joystickView, this._joystickBeforeParent);
                this._joystickBeforeParent = null;
            }

            if(this._attackBeforeParent)
            {
                GuideHelper.ChangeObjParent(this.m_skillView.m_btnAttack, this._attackBeforeParent);
                this._attackBeforeParent = null;
            }

            if(this._firSkillBeforeParent)
            {
                GuideHelper.ChangeObjParent(this.m_skillView.m_btnSkillFir, this._firSkillBeforeParent);
                this._firSkillBeforeParent = null;
            }
            
            // return;
        }

        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND)
        if(data && !data.isOver)
        {
            Game.system.guideMgr.HideGuideDialog();
            if(this._beforListItem)
            {
                GuideHelper.DestorySelf(this._beforListItem, this.m_heroView['ItemHeroClick'], this.m_heroView.m_listHero, 1, this.m_heroView);
            }
        }

        Game.event.remove(GameEventKey.GameFrame_GuideFirSkillStart, this.BtnAttackBack, this);
        Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.FinishFirSkillGuide, this);
        Game.event.remove(GameEventKey.GameFrame_GuideAttackFinish, this.BtnAttackFinish, this);
        Game.event.remove(GameEventKey.GameFrame_BattleOneWave, this.GuideAttack, this);
        Game.event.remove(GameEventKey.GameFrame_gameStart, this.DoChangeGuide, this);
        Game.event.remove(GameEventKey.GameFrame_GuideChangeHero, this.ChangeGuideFinish, this);
        Game.event.remove(GameEventKey.GameFrame_GuideJoystickFinish, this.FinishJoyStickGuide, this);
    }
}