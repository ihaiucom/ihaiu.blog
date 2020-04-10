/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStrengthenOptionStruct from "../../Generates/ModuleEquip/EquipStrengthenOptionStruct";
import EquipQulitySelectItem from "./EquipQulitySelectItem";
import GameEventKey from "../../../GameEventKey";
import Game from "../../../Game";

export default class EquipStrengthenOption extends EquipStrengthenOptionStruct
{
    onWindowInited(): void
    {
        this.m_btnSelect.onClick(this, this.OnClickSelect);
        this.m_btnSort.onClick(this, this.OnClickSort);
        this.m_frame.onClick(this, this.OnClickFrame)

        this.m_listItem.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listItem.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
    }

    clickListItem(target: EquipQulitySelectItem, event: Event)
    {
    }

    renderListItem(index: number, item: EquipQulitySelectItem): void  
    {
        item.quality = index + 1;
    }

    OnClickSelect()
    {
        this.m_listItem.visible = !this.m_listItem.visible;
        this.m_buttonState.selectedIndex = this.m_listItem.visible?1:0;
    }

    OnClickSort()
    {
        this.m_btnSort.m_sort.selectedIndex = this.m_btnSort.m_sort.selectedIndex == 0?1:0;
        Game.event.dispatch(GameEventKey.GameFrame_EquipQualitySort)
    }

    OnClickFrame()
    {
        if(this.m_listItem.visible)
        {
            this.m_listItem.visible = false;
        }
        this.m_buttonState.selectedIndex = 0;
    }

    updateView()
    {
        let list = this.m_listItem.m_list;
        list.numItems = 5;
        list.selectedIndex = 0;
        let item: EquipQulitySelectItem = <EquipQulitySelectItem>list.getChildAt(0);
        item.m_btn.selected = true;
    }
}