/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipQulitySelectItemStruct from "../../Generates/ModuleEquip/EquipQulitySelectItemStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export default class EquipQulitySelectItem extends EquipQulitySelectItemStruct
{
    quality: number;

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
        Game.event.dispatch(GameEventKey.GameFrame_EquipQualitySelect, [this.m_btn.selected, this.quality])
    }
}