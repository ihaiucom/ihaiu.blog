/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCommon3Struct from "../../Generates/CommonGame/ItemCommon3Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemCommon3 extends ItemCommon3Struct
{
    renderItem(data: ItemData)
    {
        // 质量
        this.m_Quality.selectedIndex = data.quality -1;
        
        this.m_imgItem.icon = data.iconUrl;
        this.m_labNum.text = data.count + "";
    }
}