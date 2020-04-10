/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillViewStruct from "../../Generates/GameWar3DUI/SkillViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { ComponentSkillParam } from "../../../GameWar/Logic/EcsComponents/ComponentSkillParam";
import { EnumSkillType, EnumCommonSkillType } from "../../../GameWar/Logic/Enum/EnumSkill";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import InputDefine from "../../../GameWar/Logic/Enum/InputDefine";
import MouseDownLong from "../../../GameHelpers/MouseDownLong";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { GuideMgr } from "../../../GameModule/GuideModule/GuideMgr";

export default class SkillView extends SkillViewStruct 
{

    private _btnAttackParent : any = null;

    /** 窗口显示 */
    onWindowShow(): void
    {
        MouseDownLong.onDown(this.m_btnSkillFir, this, this.OnSkillFir, 10);
        this.m_btnSkillFir.sound = "";
        MouseDownLong.onDown(this.m_btnSkillSec, this, this.OnSkillSec, 10);
        this.m_btnSkillSec.sound = "";
        MouseDownLong.onDown(this.m_btnSkillThi, this, this.OnSkillThi, 10);
        this.m_btnSkillThi.sound = "";
        MouseDownLong.onDown(this.m_btnSkillFou, this, this.OnSkillFou, 10);
        
        MouseDownLong.onDown(this.m_btnCommonSkill, this, this.OnCommon, 10);
        
        
        
        this.m_btnSkillFou.sound = "";

        MouseDownLong.onDown(this.m_btnAttack, this, this.OnAttack, 10);
        this.m_btnAttack.sound = "";
        this.m_btnJump.on(Laya.Event.MOUSE_DOWN,this, this.OnJump);
        this.m_btnJump.sound = "";
        
        // TODO yapengyu 键盘获取视图的逻辑引用
        InputManager.Get().SetSkillView(this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        MouseDownLong.offDown(this.m_btnSkillFir, this, this.OnSkillFir);
        MouseDownLong.offDown(this.m_btnSkillSec, this, this.OnSkillSec);
        MouseDownLong.offDown(this.m_btnSkillThi, this, this.OnSkillThi);
        MouseDownLong.offDown(this.m_btnSkillFou, this, this.OnSkillFou);
        
        MouseDownLong.offDown(this.m_btnCommonSkill, this, this.OnCommon);

        // this.m_btnAttack.off(Laya.Event.MOUSE_DOWN,this, this.OnAttack);
        MouseDownLong.offDown(this.m_btnAttack, this, this.OnAttack);
        this.m_btnJump.off(Laya.Event.MOUSE_DOWN,this, this.OnJump);

        this.m_btnSkillFir.Reset();
        this.m_btnSkillSec.Reset();
        this.m_btnSkillThi.Reset();
        this.m_btnSkillFou.Reset();
        // TODO yapengyu 键盘获取视图的逻辑引用
        InputManager.Get().ClearSkillView();
        
        // Game.event.remove(GameEventKey.GameFrame_GuideFirSkillStart, this.m_btnSkillFir.StartGuide, this.m_btnSkillFir);
        // Game.event.remove(GameEventKey.GameFrame_GuideAttackStart, this.GuideAttack, this);
        
    }

    /** 技能1 */
    OnSkillFir()
    {
        let res = this.m_btnSkillFir.OnLaunchSkill();
        Game.event.dispatch(GameEventKey.GameFrame_GuideFirSkillEnd);
    }

    /** 技能2 */
    OnSkillSec()
    {
        this.m_btnSkillSec.OnLaunchSkill();
    }

    /** 技能3 */
    OnSkillThi()
    {
        this.m_btnSkillThi.OnLaunchSkill();
    }

    /** 技能4 大招 */
    OnSkillFou()
    {
        let btn = this.m_btnSkillFou;
        // if (btn.enough || WarSetting.NO_CD_COST_MODE) 
        // {
        // }
        InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY7);
    }

    /** 普攻 */
    OnAttack()
    {
        InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY1);
        if(Game.system.guideMgr.isGuiding)
        {
            Game.event.dispatch(GameEventKey.GameFrame_GuideAttackFinish);
        }
    }

    /** 跳跃 */
    OnJump()
    {
        InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY2);
    }

    /** 通用技能 */
    OnCommon()
    {
        InputManager.Get().keyDownScreen(InputDefine.FUNCTION_COMMON_SKILL);
        return;
    }
    
    updateView(prop: ComponentProp):void
    {
        let skillparam  = prop.getComponent(ComponentSkillParam);        
        if(!skillparam || !skillparam.skillGroupData)
        {
            console.error("角色没有技能数据！")
            return;
        }
        if(skillparam.commonSkillType != EnumCommonSkillType.NONE)
        {
            this.ShowCommonSkill();
        }
        else
        {
            this.HideCommonSkill();
        }
        let skilldata = skillparam.skillGroupData.data;
        skilldata.forEach((skill, key)=>
        {
            // Mp/Fury判定
            switch (skill.ID) 
            {
                case EnumSkillType.Skill1:
                    this.m_btnSkillFir.updateEnergy(prop.MP, skill.MP);
                    this.m_btnSkillFir.updateCD(skill);
                    this.m_btnSkillFir.updateIcon(skill, skilldata);
                    break;
                case EnumSkillType.Skill2: 
                    this.m_btnSkillSec.updateEnergy(prop.MP, skill.MP);
                    this.m_btnSkillSec.updateCD(skill);
                    this.m_btnSkillSec.updateIcon(skill, skilldata);
                    break;
                case EnumSkillType.Skill3: 
                    this.m_btnSkillThi.updateEnergy(prop.MP, skill.MP);
                    this.m_btnSkillThi.updateCD(skill);
                    this.m_btnSkillThi.updateIcon(skill, skilldata);
                    break;
                case EnumSkillType.Skill4: 
                    this.m_btnSkillFou.updateEnergy(prop.Fury, skill.Fury);
                    this.m_btnSkillFou.updateCD(skill.CDTime, skill.BaseCDTime);
                    this.m_btnSkillFou.updateIcon(skill);
                    break;
                case EnumSkillType.Dodge: 
                case EnumSkillType.Parry:
                case EnumSkillType.KuangBao:
                case EnumSkillType.ShunShen:
                case EnumSkillType.Bati:
                    this.m_btnCommonSkill.updateEnergy(prop.MP, skill.MP);
                    this.m_btnCommonSkill.updateCD(skill);
                    this.m_btnCommonSkill.updateIcon(skill, skilldata);
                    break;
                case EnumSkillType.Jump:
                    //无限制，随意跳
                    break;
            }
        });

    }

    /**
     * 引导攻击按钮
     */
    private GuideAttack()
    {
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this.m_btnAttack);//this.m_btnAttack.parent.localToGlobal(this.m_btnAttack.x, this.m_btnAttack.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);

        this._btnAttackParent = this.m_btnAttack.parent;
        GuideHelper.ChangeObjParent(this.m_btnAttack, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_GuideAttackFinish, this.BtnAttackFinish, this);
        Game.event.add(GameEventKey.GameFrame_GuideFirSkillEnd, this.BtnAttackBack, this);
        Game.event.remove(GameEventKey.GameFrame_BattleOneWave, this.GuideAttack, this);
    }

    /**
     * 攻击按钮返回给原来层级
     */
    private BtnAttackBack()
    {
        if(!this._btnAttackParent)
        {
            GameLog.Log(EnumLogLevel.Error, "Skillview, BtnAttackBack error");
        }
        GuideHelper.ChangeObjParent(this.m_btnAttack, this._btnAttackParent);
        Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.BtnAttackBack, this);

              
    }

    private BtnAttackFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
        Game.event.remove(GameEventKey.GameFrame_GuideAttackFinish, this.BtnAttackFinish, this);
        Game.event.dispatch(GameEventKey.GameFrame_GuideFirSkillStart);
    }

    public ShowCommonSkill()
    {
        this.SetCommonSkillVisiable(true);
    }

    
    public HideCommonSkill()
    {
        this.SetCommonSkillVisiable(false);
    }

    private SetCommonSkillVisiable(val : boolean)
    {
        if(this.m_btnCommonSkill.visible == val)
        {
            return;
        }
        this.m_btnCommonSkill.visible = val;
    }
}