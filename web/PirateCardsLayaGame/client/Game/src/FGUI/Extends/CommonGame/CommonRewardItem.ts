/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItemStruct from "../../Generates/CommonGame/CommonRewardItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class CommonRewardItem extends CommonRewardItemStruct
{
    itemData: ItemData;

    rendererItem(item: ItemData)
    {
        this.itemData = item;
        let index = item.isFirstReward ? 1 : 0;
        this.m_icon.icon = item.iconUrl;
        this.m_isFirst.setSelectedIndex(index);
        index = item.quality - 1;
        this.m_itemQuality.setSelectedIndex(index);
    }
}