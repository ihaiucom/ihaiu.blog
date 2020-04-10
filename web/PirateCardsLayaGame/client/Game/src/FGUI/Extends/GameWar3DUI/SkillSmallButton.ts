/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillSmallButtonStruct from "../../Generates/GameWar3DUI/SkillSmallButtonStruct";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";

export default class SkillSmallButton extends SkillSmallButtonStruct
{
    /** 是否CD */
    public isCD:boolean   = true;

    /** 更新CD */
    updateCD(cost:number, total:number)
    {
        this.m_state.selectedIndex = 0;
        return;
        let iscd    = Boolean(cost);
        this.m_state.selectedIndex = iscd ? 1 : 0;
        this.m_labTime.changeText((cost / WarSetting.clientTickFrame).toFixed(1));
        this.m_progressCool.value  = cost / total * 100;

        this.isCD   = iscd
    }
}