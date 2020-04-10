/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerEquipItemStruct from "../../Generates/GamePlayerInfoUI/GamePlayerEquipItemStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";

export default class GamePlayerEquipItem extends GamePlayerEquipItemStruct
{

   
    data: EquipData;
    renderItem(data: EquipData)
    {
        this.m_Quality.selectedIndex = data.quality - 1; 
        this.m_imgItem.url = data.iconUrl;
        this.m_labLevel.text = data.level + "";
    }
}