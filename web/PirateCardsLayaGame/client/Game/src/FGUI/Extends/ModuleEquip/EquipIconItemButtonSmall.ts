/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipIconItemButtonSmallStruct from "../../Generates/ModuleEquip/EquipIconItemButtonSmallStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import Game from "../../../Game";

export default class EquipIconItemButtonSmall extends EquipIconItemButtonSmallStruct
{
    itemData: EquipData;
    RenderItem(data: EquipData)
    {
        this.itemData = data;
        this.m_qualityState.selectedIndex = data.quality;
        this.m_icon.url = Game.moduleModel.equip.Icon(data.uid);
        this.m_star.m_starNum.selectedIndex = data.star;
        this.m_star.m_starPos.selectedIndex = data.star;
        this.m_labelLevel.text = data.level.toString();
    }
}