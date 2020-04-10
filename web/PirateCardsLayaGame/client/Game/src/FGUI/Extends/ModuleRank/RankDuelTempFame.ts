/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameStruct from "../../Generates/ModuleRank/RankDuelTempFameStruct";
import RankDuelTempFameItem from './RankDuelTempFameItem';
import { EnumRankTab } from "../../../GameModule/ViewWindows/RankWindow";
import Game from "../../../Game";
import RankData from "../../../GameModule/DataEnums/RankData";

export default class RankDuelTempFame extends RankDuelTempFameStruct
{
    private pageDataDict: Dictionary<int, RankData[]> = new Dictionary<int, RankData[]>();
    private dataList: RankData[] = [];
    private currentPage: int = 1;
    // 窗口显示
    onWindowWillShow(): void
    {
        this.m_switch.m_left.delayOnClick(this, this.showLastPage);
        this.m_switch.m_right.delayOnClick(this, this.showNextPage);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_switch.m_left.delayOffClick(this, this.showLastPage);
        this.m_switch.m_right.delayOffClick(this, this.showNextPage);
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
        this.pageDataDict.clear();
    }

    async updateView(tab: EnumRankTab)
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.dataList = await this.getDataList();
        this.m_list.numItems = this.dataList.length;
        this.updateSwitchBtns();
    }

    renderListItem(index: number, item: RankDuelTempFameItem)
    {
        let data = this.dataList[index];
        item.renderItem(data);
    }

    private async showLastPage()
    {
        if(this.currentPage <= 1)
            return;
        this.currentPage--;
        this.dataList = await this.getDataList();
        this.m_list.numItems = this.dataList.length;
        this.updateSwitchBtns();
    }

    private async showNextPage()
    {
        if(this.dataList.length < 0)
            return;
        this.currentPage++;
        this.dataList = await this.getDataList();
        this.m_list.numItems = this.dataList.length;
        this.updateSwitchBtns();
    }

    private updateSwitchBtns()
    {
        this.m_switch.updateViewByPage(this.currentPage);
    }

    private async getDataList()
    {
        let page = this.currentPage;
        if(!this.pageDataDict.hasKey(page))
        {
            let list: RankData[] = [];
            let s2c = await this.__reqRankDataByPage(page);
            if(s2c && !s2c.error)
            {
                for(let rank of s2c.ranks)
                {
                    let data = RankData.Create(rank); 
                    if(data.rank != -1)
                    {
                        list.push(data);
                    }
                }
            }
            this.pageDataDict.add(page, list);
        }
        return this.pageDataDict.getValue(page);
    }
    private readonly pageLength = 10;
    private async __reqRankDataByPage(page: number)
    {
        let type = proto.RankType.HallOfFame;
        let seasonId = Game.moduleModel.pvp.danInfo.seasonId - page;
        if(seasonId <= 0)
            return;
        let length = this.pageLength;
        let start = length * (page-1) + 1;
        return await Game.sender.pvp.getDuelRank(type,0,start,length);
    }
}