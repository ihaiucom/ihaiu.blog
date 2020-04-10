/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillCommonButtonStruct from "../../Generates/GameWar3DUI/SkillCommonButtonStruct";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";

export default class SkillCommonButton extends SkillCommonButtonStruct
{
    /** 能量是否充足 */
    public enough:boolean = true;

    /** 是否CD */
    public isCD:boolean   = false;

    /** 更新蓝量 */
    updateEnergy(cost:number, total:number)
    {
        let enough  = (cost >= total);
        if (enough != this.enough) 
        {
            this.setGrayed(!enough);
            if (enough && !this.isCD) 
            {
                if(!this.m_effOpen.visible) this.m_effOpen.visible = true
                this.m_effOpen.play();
            }
        }

        this.enough = enough;
    }

    setGrayed(grayed:boolean)
    {
        this.grayed = grayed;
    }

    /** 更新CD */
    updateCD(cost:number, total:number)
    {
        let iscd    = Boolean(cost);
        cost = cost / (IntMath.BaseCalFactor);
        total = total / (IntMath.BaseCalFactor);
        if (iscd || this.isCD) 
        {
            this.m_state.selectedIndex = iscd ? 1 : 0;
            this.m_labTime.changeText((cost / WarSetting.clientTickFrame).toFixed(1));
            // this.m_labTime.text        = (cost / War.setting.minFrameDelta).toFixed(1);
            this.m_progressCool.value  = cost / total * 100;
            if (!iscd && this.enough) 
            {
                if(!this.m_effOpen.visible) this.m_effOpen.visible = true
                this.m_effOpen.play();
            }
        }
        this.isCD   = iscd;
    }

    Reset()
    {
        this.enough = true;
        this.isCD   = false;
        this.m_state.selectedIndex = 0;
        this.grayed = false;
    }
}