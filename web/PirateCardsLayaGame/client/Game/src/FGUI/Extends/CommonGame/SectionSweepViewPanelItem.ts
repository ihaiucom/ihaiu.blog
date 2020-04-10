import SectionSweepViewPanelItemStruct from "../../Generates/CommonGame/SectionSweepViewPanelItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import SweepRewardData from "../../../GameModule/DataStructs/SweepRewardData";
import CommonRewardItem2 from "./CommonRewardItem2";

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class SectionSweepViewPanelItem extends SectionSweepViewPanelItemStruct
{
    itemList: ItemData[] = [];

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    updateView(data: SweepRewardData,index: number)
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
        let list = data.itemRewardList[index];
        let baseList = data.baseReward;
        this.itemList = list;
        this.m_times.setSelectedIndex(index);
        for(let reward of baseList)
        {
            if(reward.type == proto.ItemType.exp)
            {
                this.m_exp.renderItem(reward);
            }
            else if(reward.type == proto.ItemType.silver)
            {
                this.m_silver.renderItem(reward);
            }
        }
        this.m_list.numItems = this.itemList.length;
    }

    private renderListItem(index: number,item: CommonRewardItem2)
    {
        let data = this.itemList[index];
        item.rendererItem(data);
    }
}