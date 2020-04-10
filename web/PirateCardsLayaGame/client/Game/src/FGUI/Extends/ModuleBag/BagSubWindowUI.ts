/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagSubWindowUIStruct from "../../Generates/ModuleBag/BagSubWindowUIStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import BagWindow, { EnumBagMenuType } from '../../../GameModule/ViewWindows/BagWindow';
import Game from "../../../Game";
import BagWindowUI from "./BagWindowUI";

export default class BagSubWindowUI extends BagSubWindowUIStruct
{
    moduleWindow: BagWindow;
    
    private itemData: ItemData;

    private lastIndex: number;

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_confirmBtn.onClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.onClick(this,this.onClose);
        this.m_closeBtn.onClick(this,this.onClose);
        this.m_bgClose.m_closeBtn.onClick(this,this.onClose);

        this.m_itemNum.m_minBtn.onClick(this.m_itemNum,this.m_itemNum.minBtnOnClick);
        this.m_itemNum.m_maxBtn.onClick(this.m_itemNum,this.m_itemNum.maxBtnOnClick);
        this.m_itemNum.m_addBtn.onClick(this.m_itemNum,this.m_itemNum.addBtnOnClick);
        this.m_itemNum.m_minusBtn.onClick(this.m_itemNum,this.m_itemNum.minusBtnOnClick);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_confirmBtn.offClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.offClick(this,this.onClose);
        this.m_closeBtn.offClick(this,this.onClose);
        this.m_bgClose.onClick(this, this.onClose);

        this.m_itemNum.m_minBtn.offClick(this.m_itemNum,this.m_itemNum.minBtnOnClick);
        this.m_itemNum.m_maxBtn.offClick(this.m_itemNum,this.m_itemNum.maxBtnOnClick);
        this.m_itemNum.m_addBtn.offClick(this.m_itemNum,this.m_itemNum.addBtnOnClick);
        this.m_itemNum.m_minusBtn.offClick(this.m_itemNum,this.m_itemNum.minusBtnOnClick);
    }

    private confirmBtnOnClick()
    {
        let d = this.itemData;
        switch (this.m_useType.selectedIndex) {
            case 0:
                Game.sender.bag.sellItem(d.id,this.m_itemNum.itemNum,d.uid);
                break;
            case 1:
                if (d.useUi) 
                {
                    let menuconfig = Game.config.menu.getConfig(d.useUi);
                    menuconfig.openMenu();
                }
                else
                {
                    Game.sender.bag.useItem(d.id,this.m_itemNum.itemNum,d.uid);
                }
                break;
            case 2:
                Game.sender.bag.splitItem(d.id,this.m_itemNum.itemNum,d.uid);
                break;
        }

        this.onClose();
    }

    private onClose()
    {
        // this.moduleWindow.openTab(this.lastIndex);
        let windowui = <BagWindowUI>this.parent;
        windowui.openTab(this.lastIndex)
    }

    updateData(itemData: ItemData,type: EnumBagMenuType, lastindex:number)
    {
        // type == EnumBagMenuType.ItemSell && (this.m_sellPanel.updateData(itemData));
        // type == EnumBagMenuType.ItemUse && (this.m_usePanel.updateData(itemData));
        // type == EnumBagMenuType.ItemSplit && (this.m_splitPanel.updateData(itemData));

        this.itemData  = itemData;
        this.lastIndex = lastindex;
        this.m_itemNum.setMaxCount(itemData.count);
    }
}