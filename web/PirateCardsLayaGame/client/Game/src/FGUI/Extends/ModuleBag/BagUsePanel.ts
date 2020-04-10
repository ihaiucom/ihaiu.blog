/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagUsePanelStruct from "../../Generates/ModuleBag/BagUsePanelStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import BagWindow from "../../../GameModule/ViewWindows/BagWindow";
import Game from '../../../Game';

export default class BagUsePanel extends BagUsePanelStruct
{
    moduleWindow: BagWindow;

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_confirmBtn.onClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.onClick(this,this.onClose);
        this.m_closeBtn.onClick(this,this.onClose);
        this.m_bgClose.m_closeBtn.onClick(this,this.onClose);

        // Game.net.gamerUseItemS2C.on(this.useItemHandler,this);
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

        // Game.net.gamerUseItemS2C.off(this.useItemHandler,this);
        this.m_itemNum.m_minBtn.offClick(this.m_itemNum,this.m_itemNum.minBtnOnClick);
        this.m_itemNum.m_maxBtn.offClick(this.m_itemNum,this.m_itemNum.maxBtnOnClick);
        this.m_itemNum.m_addBtn.offClick(this.m_itemNum,this.m_itemNum.addBtnOnClick);
        this.m_itemNum.m_minusBtn.offClick(this.m_itemNum,this.m_itemNum.minusBtnOnClick);
    }

    private confirmBtnOnClick()
    {
        let d = this.itemData;
        Game.sender.bag.useItem(d.id,this.m_itemNum.itemNum,d.uid);
    }

    private useItemHandler(msg)
    {
        if(!msg.error)
            this.onClose();
    }

    private onClose()
    {
        // this.moduleWindow.menuBack();
        this.moduleWindow.openTab(0);
        // this.visible = false;
    }
    
    itemData: ItemData;
    
    updateData(itemData: ItemData)
    {
        this.itemData = itemData;
        this.m_itemNum.setMaxCount(itemData.count);
        this.visible = true;
    }
}