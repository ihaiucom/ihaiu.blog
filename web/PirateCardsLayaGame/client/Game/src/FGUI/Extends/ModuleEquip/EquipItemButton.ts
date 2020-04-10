/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipItemButtonStruct from "../../Generates/ModuleEquip/EquipItemButtonStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";

export default class EquipItemButton extends EquipItemButtonStruct
{
    data: EquipData;
    updateItem(data: EquipData)
    {
        this.m_quality.selectedIndex = data.quality - 1; 
        this.m_icon.url = data.iconUrl;
        this.m_labQuality.text = "" + data.level;
    }
}