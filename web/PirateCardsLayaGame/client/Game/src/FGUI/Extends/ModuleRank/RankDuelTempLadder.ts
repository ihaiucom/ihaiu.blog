/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempLadderStruct from "../../Generates/ModuleRank/RankDuelTempLadderStruct";
import RankDuelTempLadderItem from './RankDuelTempLadderItem';
import Game from '../../../Game';
import { EnumRankTab } from '../../../GameModule/ViewWindows/RankWindow';
import RankData from '../../../GameModule/DataEnums/RankData';
import TEXT from '../../../Config/Keys/TEXT';
import RankType = proto.RankType;

export default class RankDuelTempLadder extends RankDuelTempLadderStruct
{
    private pageDataDict: Dictionary<int, RankData[]> = new Dictionary<int, RankData[]>();
    private dataList: RankData[] = [];
    private currentPage: int = 1;
    // 窗口显示
    onWindowWillShow(): void
    {
        this.m_switch.m_left.delayOnClick(this, this.showLastPage);
        this.m_switch.m_right.delayOnClick(this, this.showNextPage);
        window[`rank`] = this;
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
        this.type = proto.RankType.Server
        tab == EnumRankTab.LadderAll && (this.type = proto.RankType.Total);
        this.currentPage = 1;
        this.updateSwitchBtns(false);
        this.dataList = await this.getDataList();
        this.m_list.numItems = this.dataList.length;
    }

    renderListItem(index: number, item: RankDuelTempLadderItem)
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
        this.updateSwitchBtns(this.dataList.length < 10);
    }

    private async showNextPage()
    {
        if(this.dataList.length < 0)
            return;
        this.currentPage++;
        this.dataList = await this.getDataList();
        this.m_list.numItems = this.dataList.length;
        this.updateSwitchBtns(this.dataList.length < 10);
    }

    private updateSwitchBtns(isLastPage: boolean)
    {
        this.m_switch.updateViewByPage(this.currentPage,isLastPage);
    }

    private async getDataList()
    {
        let page = this.currentPage;
        if(!this.pageDataDict.hasKey(page))
        {
            let list: RankData[] = [];
            let s2c = await this.reqRankDataByPage(page);
            let myRank: RankData;
            if(!s2c.error)
            {
                let data = RankData.Create(s2c.ranks.shift()); 
                if(data && data.rank != -1 && data.id == Game.user.id)
                    myRank = data;
                for(let rank of s2c.ranks)
                {
                    let data = RankData.Create(rank); 
                    list.push(data);
                }
            }
            if(list.length > 0 && myRank)
                this.m_rankLb.text = TEXT.RankMyAllRank.format(myRank.rank);
            else
                this.m_rankLb.text = TEXT.RankMyAllRank.format(TEXT.RankNotOnRank);
            this.pageDataDict.add(page, list);
        }
        return this.pageDataDict.getValue(page);
    }

    
    private type: proto.RankType = proto.RankType.Server;
    private readonly pageLength = 10;
    private async reqRankDataByPage(page: number)
    {
        let seasonId = Game.moduleModel.pvp.danInfo.seasonId;
        let length = this.pageLength;
        let start = length * (page-1) + 1;
        return await Game.sender.pvp.getDuelRank(this.type,seasonId,start,length);
    }

    // private async reqRankData(type: RankType, page: number)
    // {
    //     let seasonId = Game.moduleModel.pvp.danInfo.seasonId;
    //     let length = this.pageLength;
    //     let start = length * (page - 1) + 1;
    //     return await Game.sender.pvp.getDuelRank(type,seasonId,start,length);
    // }
}