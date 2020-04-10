/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarUpItemStruct from "../../Generates/ModuleEquip/EquipStarUpItemStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import Game from "../../../Game";
import { EquipQuality } from "../../../GameModule/DataEnums/EquipType";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class EquipStarUpItem extends EquipStarUpItemStruct
{
    itemID: int; // 选中的物品ID
    uid: int; // 选中的装备ID

    equipEnough: boolean = false;
    itemEnough: boolean = false;
    updateEquip(data: EquipData)
    {
        this.m_showState.selectedIndex = 0;
        let equipData = Game.moduleModel.equip.GetMinEquipByID(data.id, data.uid)
        if(!equipData)
        {
            // this.m_state.selectedIndex = 1;
            this.m_icon.m_labelLevel.text = ""
            this.m_icon.m_laeblNum.text = "0";
            this.m_icon.m_color.selectedIndex = 1;
            this.uid = null;

            let d = Game.moduleModel.equip.GetDataByUID(data.uid);
            this.m_icon.m_icon.url = d.iconUrl;
            this.equipEnough = false;
            this.m_btnSelect.grayed = true;
            this.m_titleColor.selectedIndex = 1;
        }
        else
        {
            // this.m_state.selectedIndex = 0;
            this.m_icon.RenderItem(equipData);
            this.m_icon.m_laeblNum.text = "";
            this.m_icon.m_color.selectedIndex = 0;
            this.uid = equipData.uid;
            this.equipEnough = true;
            this.m_btnSelect.grayed = false;
            this.m_titleColor.selectedIndex = 0;
        }
        
        this.m_labelName.text = data.name;
    }

    updateItem(uid: number)
    {
        this.m_showState.selectedIndex = 1;
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        let itemIDs = Global.epuipPromotionItem
        let itemID = data.quality == EquipQuality.Orange? itemIDs[1]: itemIDs[0];
        this.itemID = itemID;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        // this.m_state.selectedIndex = itemNum>0?0:1;
        let itemData = ItemData.Create(itemID, itemNum)
        this.m_labelName.text = itemData.itemName;
        this.m_icon.m_icon.url = itemData.iconUrl;
        this.m_icon.m_star.visible = false;
        this.m_icon.m_labelLevel.text = "";

        this.m_icon.m_color.selectedIndex = itemNum>0?0:1;
        this.m_icon.m_laeblNum.text = itemNum.toString();

        this.itemEnough = itemNum>0?true:false;
        this.m_btnSelect.grayed = itemNum>0?false:true;
        this.m_titleColor.selectedIndex = itemNum>0?0:1;
    }
}