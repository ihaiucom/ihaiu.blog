/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCommon2Struct from "../../Generates/CommonGame/ItemCommon2Struct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";

export default class ItemCommon2 extends ItemCommon2Struct
{
    renderItem(data: ItemData|EquipData)
    {
        // 质量
        this.m_Quality.selectedIndex = data.quality -1;
        
        this.m_imgItem.icon = data.iconUrl;
    }
}