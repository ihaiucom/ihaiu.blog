/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillNormalButtonStruct from "../../Generates/GameWar3DUI/SkillNormalButtonStruct";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import { BattleSkillData, BattleSkillGroupData } from "../../../GameWar/Logic/Struct/BattleSkillData";
import { EnumSkillMultiType } from "../../../GameWar/Logic/Enum/EnumSkill";
import { SkillUtil } from "../../../GameWar/Logic/Utils/SkillUtil";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";

export default class SkillNormalButton extends SkillNormalButtonStruct 
{
    /** 能量是否充足 */
    public enough:boolean = true;

    /** 是否CD */
    public isCD:boolean   = false;

    /** 技能数据 */
    public skillData: BattleSkillData = null;
    /** 表示是否发送 */
    public _canSend = false;

    private _beforeParent : any;

    public get canSend() : boolean
    {
        return this._canSend
    }
    public set canSend(val : boolean)
    {
        this._canSend = val;
    }

    private _isGuide : boolean = false;

    public get isGuide() : boolean
    {
        return this._isGuide;
    }
    public set isGuide(val : boolean)
    {
        this._isGuide = val;
    }

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this._isGuide = false;
        this._beforeParent = this.parent;
    }

    /** 窗口显示 */
    onWindowShow(): void
    {

    }


    /** 更新蓝量 */
    updateEnergy(cost:number, total:number)
    {
        if(WarSetting.NO_CD_COST_MODE)
        {
            return;
        }
        let enough  = (cost >= total);
        if (enough != this.enough) 
        {
            this.setGrayed(!enough);

            // 能量满的时候且无CD，播放提示动画；
            if (enough && !this.isCD) 
            {
                this.playOpenEff()
            }
        }
        
        this.enough = enough;
    }

    OnLaunchSkill() : boolean
    {
        let isCan = false;
        let isSend = false;
        let skilldata = this.skillData
        if(!this.skillData)
        {
            return;
        }
        let actionType = SkillUtil.GetActionTypeBySkillIndex(skilldata.ID);
        if(skilldata.IsMultiSkill)
        {
            switch (skilldata.MultiState) {
                case EnumSkillMultiType.Normal:
                    // if(this.enough && !this.isCD)
                    // {
                    isCan = true;
                    // }
                    break;
                case EnumSkillMultiType.Switch:
                    isCan = false;
                    break;
                case EnumSkillMultiType.Freed:
                    isCan = true;
                    actionType = SkillUtil.GetActionTypeBySkillIndex(skilldata.MultiSkillID);
                    break;
                case EnumSkillMultiType.End:
                    isCan = false;
                    break;
                default:
                    break;
            }
        }
        else
        {
            // if(this.enough && !this.isCD)
            // {
                isCan = true;
            // }
        }
        if(isCan || WarSetting.NO_CD_COST_MODE)
        {
            let keyType = InputManager.GetInputKeyBySkillActionType(actionType)
            InputManager.Get().keyDownScreen(keyType);
            isSend = true;
        }
        return isSend;
    }

    playOpenEff()
    {
        if(!this.m_effOpen.visible) this.m_effOpen.visible = true
        this.m_effOpen.play();
    }

    setGrayed(grayed:boolean)
    {
        this.grayed = grayed;
    }

    updateIcon(skillData: BattleSkillData, skillGroupData:Map<number, BattleSkillData>)
    {
        if(!skillData || !skillGroupData)
        {
            return;
        }
        
        let url = skillData.Icon;
        if(skillData.IsMultiSkill)
        {
            let multiSkillID = skillData.MultiSkillID;
            let multiSkillData = skillGroupData.get(multiSkillID);
            url = multiSkillData.Icon;
        }

        let curUrl = this.m_icon.url
        if(curUrl == url)
        {
            return;
        }
        this.m_icon.url = url;
    }

    /** 更新CD */
    updateCD(skillData: BattleSkillData)
    {
        
        this.skillData = skillData;

        if(WarSetting.NO_CD_COST_MODE)
        {
            return;
        }
        let cd = skillData.CDTime;
        let baseCD = skillData.BaseCDTime;
        let iscd = Boolean(cd);
        cd = cd / (IntMath.BaseCalFactor);
        baseCD = baseCD / (IntMath.BaseCalFactor);
        if(iscd) 
        {
            this.m_state.selectedIndex = 1;
            this.m_labTime.text        = (cd / WarSetting.clientTickFrame).toFixed(1);
            this.m_progressCool.value  = cd / baseCD * 100;

            if(skillData.IsMultiSkill)
            {
                switch(skillData.MultiState)
                {
                    case EnumSkillMultiType.Normal:
                        break;            
                    case EnumSkillMultiType.Switch:
                        this.m_state.selectedIndex = 2;
                        cd = skillData.MultiCDTime/IntMath.BaseCalFactor;
                        baseCD = skillData.BaseMultiCDTime/IntMath.BaseCalFactor;
                        this.m_labMultiTime.text = (cd/WarSetting.clientTickFrame).toFixed(1);
                        this.m_progressMultiCool.value = cd/baseCD * 100;    
                        return
                    case EnumSkillMultiType.Freed:
                        this.m_state.selectedIndex = 3;
                        cd = skillData.FreedCDTime/IntMath.BaseCalFactor;
                        baseCD = skillData.BaseFreedCDTime/IntMath.BaseCalFactor;
                        this.m_labFreedTime.text = (cd/WarSetting.clientTickFrame).toFixed(1);
    
                        break;
                    case EnumSkillMultiType.End:            
                        break;       
                    default:
                        break;
                }
            }
        }
        else
        {
            this.m_state.selectedIndex = 0;
        }

        // 从CD状态切换至正常状态时判定能量足够，播放提示动画
        if(this.isCD && !iscd && this.enough)
        {
            this.playOpenEff();
        }

        this.isCD = iscd;
    }

    Reset()
    {
        this.enough = true;
        this.isCD   = false;
        this.m_state.selectedIndex = 0;
        this.grayed = false;

        this.skillData = null;
        this.m_icon.icon = "";
    }

    // /**
    //  * 开始引导
    //  */
    // public StartGuide()
    // {
    //     this.isGuide = true;
    //     let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this);//this.parent.localToGlobal(this.x, this.y);
    //     Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);
    //     this._beforeParent = this.parent;
    //     GuideHelper.ChangeObjParent(this, Game.system.guideMgr.otherNode);
    //     Game.event.add(GameEventKey.GameFrame_GuideFirSkillEnd, this.FinishGuide, this);
    // }

    // private FinishGuide()
    // {
    //     this.isGuide = false;
    //     if(!this._beforeParent)
    //     {
    //         GameLog.Log(EnumLogLevel.Error, "skillNormalButton， finishGuide出问题，请检查");
    //         return;
    //     }
    //     GuideHelper.ChangeObjParent(this, this._beforeParent);
    //     this._beforeParent = null;


    //     let model = Game.moduleModel.guide;
    //     if(!model)
    //     {
    //         return;
    //     }
    //     model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
    //     Game.system.guideMgr.HideGuideDialog();
    // }
}