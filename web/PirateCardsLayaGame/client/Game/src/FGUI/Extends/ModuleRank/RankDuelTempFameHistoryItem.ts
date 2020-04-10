/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameHistoryItemStruct from "../../Generates/ModuleRank/RankDuelTempFameHistoryItemStruct";
import RankData from "../../../GameModule/DataEnums/RankData";
import TEXT from "../../../Config/Keys/TEXT";

export default class RankDuelTempFameHistoryItem extends RankDuelTempFameHistoryItemStruct
{
    renderItem(rankData: RankData)
    {
        this.m_title.text = rankData.rank + "";
        this.m_name.text  = rankData.name;
        this.m_dan.text = rankData.danName;
        this.m_starNum.text = TEXT.RankDanStar.format(rankData.star);
        this.m_server.text = rankData.serverName;
    }
}