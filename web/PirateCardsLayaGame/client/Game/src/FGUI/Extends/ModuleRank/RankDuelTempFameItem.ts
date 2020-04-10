/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameItemStruct from "../../Generates/ModuleRank/RankDuelTempFameItemStruct";
import RankData from "../../../GameModule/DataEnums/RankData";

export default class RankDuelTempFameItem extends RankDuelTempFameItemStruct
{
    renderItem(rankData: RankData)
    {
        this.m_title.text = rankData.rank + "";
        this.m_name.text  = rankData.name;
        this.m_times.text = rankData.rankTimes + "";
        this.m_server.text = rankData.serverName;
    }
}