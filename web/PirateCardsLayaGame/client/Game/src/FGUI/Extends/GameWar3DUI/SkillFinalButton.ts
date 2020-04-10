/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillFinalButtonStruct from "../../Generates/GameWar3DUI/SkillFinalButtonStruct";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import InputDefine from "../../../GameWar/Logic/Enum/InputDefine";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";
import { BattleSkillData } from "../../../GameWar/Logic/Struct/BattleSkillData";

export default class SkillFinalButton extends SkillFinalButtonStruct
{
    /** 能量是否充足 */
    public enough:boolean = true;

    /** 是否CD */
    public isCD:boolean   = false;

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
        }

        if (!this.enough) 
        {
            this.m_effFury.setValue(cost/total);
        }

        this.enough = enough;
    }

    setGrayed(grayed:boolean)
    {
        this.m_icon.grayed = grayed;
        this.m_effFire.visible = !grayed;
    }

    /** 更新CD */
    updateCD(cost:number, total:number)
    {
        if(WarSetting.NO_CD_COST_MODE)
        {
            return;
        }

        let iscd    = Boolean(cost);
        cost = cost / (IntMath.BaseCalFactor);
        total = total / (IntMath.BaseCalFactor);
        this.isCD   = iscd;
    }

    updateIcon(skillData: BattleSkillData)
    {
        if(!skillData)
        {
            return;
        }

        let curUrl = this.m_icon.url
        let url = skillData.Icon;
        if(curUrl == url)
        {
            return;
        }
        this.m_icon.url = url;
    }

    private OnClick()
    {

        if (this.enough) 
        {
            InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY7);
        }
    }

    Reset()
    {
        this.enough = true;
        this.isCD   = false;
        this.m_state.selectedIndex = 0;
        this.grayed = false;
        this.m_icon.icon = "";
    }
}