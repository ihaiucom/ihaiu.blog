/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempLadderItemStruct from "../../Generates/ModuleRank/RankDuelTempLadderItemStruct";
import RankData from '../../../GameModule/DataEnums/RankData';
import TEXT from '../../../Config/Keys/TEXT';

export default class RankDuelTempLadderItem extends RankDuelTempLadderItemStruct
{
    renderItem(rankData: RankData)
    {
        this.m_title.text = rankData.rank + "";
        this.m_name.text  = rankData.name;
        this.m_danStar.text = TEXT.RankDanStar.format(rankData.danName,rankData.star);;
        this.m_server.text = rankData.serverName;
    }
}