/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponItemButtonStruct from "../../Generates/GashaponUI/GashaponItemButtonStruct";
import HeroConfig from "../../../Config/ConfigExtends/HeroConfig";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class GashaponItemButton extends GashaponItemButtonStruct
{
    renderItem(data:ItemData)
    {
        if(data.type == proto.ItemType.heroItem)
            this.m_title.text = data.heroConfig.name;
        else 
            this.m_title.text = data.itemName;
    }
}