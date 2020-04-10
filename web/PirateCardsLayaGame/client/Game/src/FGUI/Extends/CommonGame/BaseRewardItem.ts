/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseRewardItemStruct from "../../Generates/CommonGame/BaseRewardItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class BaseRewardItem extends BaseRewardItemStruct
{
    renderItem(itemData: ItemData)
    {
        this.m_icon.icon = itemData.iconUrl;
        this.m_num.text = itemData.itemNumTxt1;
    }
}