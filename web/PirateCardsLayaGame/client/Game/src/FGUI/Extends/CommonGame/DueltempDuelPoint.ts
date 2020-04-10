/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempDuelPointStruct from "../../Generates/CommonGame/DueltempDuelPointStruct";
import DanInfoData from '../../../GameModule/DataStructs/DanInfoData';

export default class DueltempDuelPoint extends DueltempDuelPointStruct
{
    UpdateView(info: DanInfoData)
    {
        let point = info.rewardPoint;
        let max = info.maxJDScore;
        this.m_bar.fillAmount = point / max;
        this.m_title.text = point + "";
    }
}