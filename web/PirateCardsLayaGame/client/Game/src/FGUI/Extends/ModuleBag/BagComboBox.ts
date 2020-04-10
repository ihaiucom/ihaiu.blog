/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagComboBoxStruct from "../../Generates/ModuleBag/BagComboBoxStruct";
import TEXT from '../../../Config/Keys/TEXT';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import Game from '../../../Game';
import {MenuId} from "../../../GameModule/MenuId";
import { EnumBagMenuType } from '../../../GameModule/ViewWindows/BagWindow';
import { EquipData } from '../../../GameModule/DataStructs/EquipData';
import { EnumBagUseType } from '../../../GameModule/DataModels/BagModel';

export default class BagComboBox extends BagComboBoxStruct
{
    private itemData: ItemData | EquipData;
    
    updateView(itemData: ItemData| EquipData)
    {
        this.itemData = itemData;
        let types = itemData.useTypes;
        let items = [];
        for(let type of types)
        {
            type == EnumBagUseType.Sell && (items.push(TEXT.BagItemSell))
            type == EnumBagUseType.Use && (items.push(TEXT.BagItemUse))
            type == EnumBagUseType.Split && (items.push(TEXT.BagItemSplit));
            type == EnumBagUseType.Forge && (items.push(TEXT.BagItemForge));
        }
        this.items = items;
        this.values = types;
    }

    onShow()
    {
        this.on(fgui.Events.STATE_CHANGED,this,this.onItemClick);

    }

    onHide()
    {
        this.off(fgui.Events.STATE_CHANGED,this,this.onItemClick);
    }

    private onItemClick(event: Laya.Event)
    {
        let type: EnumBagUseType = this.itemData.useTypes[this.selectedIndex];
        if(type == EnumBagUseType.Sell)
        {
            Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemSell,this.itemData);
        }
        else if(type == EnumBagUseType.Use)
        {
            Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemUse,this.itemData);

        }
        else if(type == EnumBagUseType.Split)
        {
            Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemSplit,this.itemData);

        }
        else if(type == EnumBagUseType.Forge)
        {

        }
        console.log(event);
        
    }
}