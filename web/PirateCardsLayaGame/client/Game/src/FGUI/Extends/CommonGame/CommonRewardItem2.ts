/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItem2Struct from "../../Generates/CommonGame/CommonRewardItem2Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class CommonRewardItem2 extends CommonRewardItem2Struct
{
    rendererItem(item: ItemData)
    {
        this.m_icon.icon = item.iconUrl;
        let index = item.quality - 1;
        this.m_itemQuality.setSelectedIndex(index);
    }
}