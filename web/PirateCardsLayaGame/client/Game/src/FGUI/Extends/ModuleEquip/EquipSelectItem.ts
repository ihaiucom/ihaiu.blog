/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectItemStruct from "../../Generates/ModuleEquip/EquipSelectItemStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import GameEventKey from "../../../GameEventKey";
import Game from "../../../Game";

export default class EquipSelectItem extends EquipSelectItemStruct
{
    itemData: EquipData;
    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        this.m_btn.onClick(this, this.OnClickButtn);
    }

    dispose()
    {
        this.m_btn.offClick(this, this.OnClickButtn);
        super.dispose();
    }

    OnClickButtn()
    {
        Game.event.dispatch(GameEventKey.GameFrame_EquipItemSelect,[this.m_btn.selected, this.itemData.uid] )
    }

    set select(isBool: boolean)
    {
        this.m_btn.selected = isBool;
    }

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