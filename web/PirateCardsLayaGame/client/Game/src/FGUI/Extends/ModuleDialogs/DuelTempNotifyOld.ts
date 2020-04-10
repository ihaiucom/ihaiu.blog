/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempNotifyOldStruct from "../../Generates/ModuleDialogs/DuelTempNotifyOldStruct";
import Game from "../../../Game";
import DanInfoData from '../../../GameModule/DataStructs/DanInfoData';

export default class DuelTempNotifyOld extends DuelTempNotifyOldStruct
{
    updateView(danInfo: DanInfoData)
    {
        this.m_DanIcon.icon = danInfo.iconUrl;
        this.m_danName.text = danInfo.name;
        this.m_star.m_star_count.setSelectedPage(danInfo.starCount+"");
        this.m_star.m_star_num.setSelectedIndex(danInfo.star);

    }
}