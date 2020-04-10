/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardItem2Struct from "../../Generates/GameSectionsUI/RewardItem2Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class RewardItem2 extends RewardItem2Struct
{
    rendererItem(item: ItemData)
    {
        this.m_icon.icon = item.iconUrl;
        let index = item.quality - 1;
        this.m_itemQuality.setSelectedIndex(index);
    }
}