/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagSellPanelStruct from "../../Generates/ModuleBag/BagSellPanelStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import BagWindow from '../../../GameModule/ViewWindows/BagWindow';
import Game from '../../../Game';

export default class BagSellPanel extends BagSellPanelStruct
{

    moduleWindow: BagWindow;
    
    private itemData: ItemData;

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_confirmBtn.onClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.onClick(this,this.onClose);
        this.m_closeBtn.onClick(this,this.onClose);
        this.m_bgClose.m_closeBtn.onClick(this,this.onClose);

        Game.net.gamerSellItemS2C.on(this.sellItemHandler, this);
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
        // this.m_bgClose.onClick(this, this.onClose);

        Game.net.gamerSellItemS2C.off(this.sellItemHandler,this);
        this.m_itemNum.m_minBtn.offClick(this.m_itemNum,this.m_itemNum.minBtnOnClick);
        this.m_itemNum.m_maxBtn.offClick(this.m_itemNum,this.m_itemNum.maxBtnOnClick);
        this.m_itemNum.m_addBtn.offClick(this.m_itemNum,this.m_itemNum.addBtnOnClick);
        this.m_itemNum.m_minusBtn.offClick(this.m_itemNum,this.m_itemNum.minusBtnOnClick);
    }
    
    updateData(itemData: ItemData)
    {
        this.itemData = itemData;
        this.m_itemNum.setMaxCount(itemData.count);
        this.visible = true;
    }

    private confirmBtnOnClick()
    {
        let d = this.itemData;
        Game.sender.bag.sellItem(d.id,this.m_itemNum.itemNum,d.uid);
    }

    private sellItemHandler(msg: proto.GamerSellItemS2C)
    {
        if(!msg.error)
        {
            for(let item of msg.items)
            {
                
            }

        }
    }

    private onClose()
    {
        // this.moduleWindow.menuBack();
        this.moduleWindow.openTab(0);
        
        // this.visible = false;
    }
}