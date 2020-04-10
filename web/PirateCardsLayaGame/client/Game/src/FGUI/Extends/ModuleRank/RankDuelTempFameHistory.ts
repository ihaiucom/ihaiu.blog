/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameHistoryStruct from "../../Generates/ModuleRank/RankDuelTempFameHistoryStruct";
import RankData from "../../../GameModule/DataEnums/RankData";
import { EnumRankTab } from "../../../GameModule/ViewWindows/RankWindow";
import Game from "../../../Game";
import RankDuelTempFameHistoryItem from './RankDuelTempFameHistoryItem';

export default class RankDuelTempFameHistory extends RankDuelTempFameHistoryStruct
{
    private pageDataDict: Dictionary<int, RankData[]> = new Dictionary<int, RankData[]>();
    private dataList: RankData[] = [];
    private currentPage: int = 1;
    // 窗口显示
    onWindowWillShow(): void
    {
    }

    // 窗口隐藏
    onWindowHide(): void
    {
       
    }

    async updateView(tab: EnumRankTab)
    {
        let type = proto.RankType.Total;
        let curentSeasonId = Game.moduleModel.pvp.danInfo.seasonId;
        if(curentSeasonId <= 1)
            return;
        this.currentPage = 1;
        let s2c = await this.getDataList();
        let isEmpty = this.dataList.length <= 0;
        this.m_isEmpty.setSelectedIndex(isEmpty?1:0);
    }

    renderListItem(index: number, item: RankDuelTempFameHistoryItem)
    {
        let data = this.dataList[index];
        item.renderItem(data);
    }

    private async getDataList()
    {
        let page = this.currentPage;
        if(!this.pageDataDict.hasKey(page))
        {
            let list: RankData[] = [];
            let s2c = await this.reqRankDataByPage(page);
            if(!s2c.error)
            {
                for(let rank of s2c.ranks)
                {
                    let data = RankData.Create(rank); 
                    list.push(data);
                }
            }
            this.pageDataDict.add(page, list);
        }
        return this.pageDataDict.getValue(page);
    }
    private readonly pageLength = 5;
    private async reqRankDataByPage(page: number)
    {

        let seasonId = Game.moduleModel.pvp.danInfo.seasonId - page;
        if(seasonId <= 0)
            return;
        let length = this.pageLength;
        let start = length * (page-1) + 1;
        return await Game.sender.pvp.getDuelRank(proto.RankType.Total,seasonId,start,length);
    }
}