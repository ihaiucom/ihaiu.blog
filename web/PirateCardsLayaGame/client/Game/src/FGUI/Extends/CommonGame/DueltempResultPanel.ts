/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempResultPanelStruct from "../../Generates/CommonGame/DueltempResultPanelStruct";
import DanInfoData from "../../../GameModule/DataStructs/DanInfoData";

export default class DueltempResultPanel extends DueltempResultPanelStruct
{
    updateView(danInfo: DanInfoData)
    {
        this.m_star.m_star_count.setSelectedPage(danInfo.starCount + "");
        this.m_star.m_star_num.setSelectedIndex(danInfo.star);
        this.m_danLevel.UpdateView(danInfo);
    }
}