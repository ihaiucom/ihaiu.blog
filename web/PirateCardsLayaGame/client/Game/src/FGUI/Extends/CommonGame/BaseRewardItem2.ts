/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseRewardItem2Struct from "../../Generates/CommonGame/BaseRewardItem2Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class BaseRewardItem2 extends BaseRewardItem2Struct
{
    renderItem(itemData: ItemData)
    {
        this.m_icon.icon = itemData.iconUrl;
        this.m_num.text = itemData.itemNumTxt1;
    }
}