/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItem3Struct from "../../Generates/CommonGame/CommonRewardItem3Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class CommonRewardItem3 extends CommonRewardItem3Struct
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