/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagSplitPanelStruct from "../../Generates/ModuleBag/BagSplitPanelStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import BagWindow from "../../../GameModule/ViewWindows/BagWindow";
import Game from "../../../Game";
import BagItem from '../CommonGame/BagItem';
import { EquipData } from '../../../GameModule/DataStructs/EquipData';

export default class BagSplitPanel extends BagSplitPanelStruct
{
    

    moduleWindow: BagWindow;


    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_confirmBtn.onClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.onClick(this,this.onClose);
        this.m_closeBtn.onClick(this,this.onClose);
        this.m_list.setItemRenderer(this.renderListItem,this);

        // Game.net.gamerUseItemS2C.on(this.splitItemHandler,this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_confirmBtn.offClick(this,this.confirmBtnOnClick);
        this.m_cancelBtn.offClick(this,this.onClose);
        this.m_closeBtn.offClick(this,this.onClose);
        this.m_list.itemRenderer.recover();

        // Game.net.gamerUseItemS2C.off(this.splitItemHandler,this);
    }

    private confirmBtnOnClick()
    {
        let d = this.itemData;
        if(this.itemData instanceof ItemData)
            Game.sender.bag.useItem(d.id,1,d.uid);
        else if(this.itemData instanceof EquipData)
        {
            // Game.sender.equip.
        }
    }

    private splitItemHandler(msg)
    {
        if(!msg.error)
            this.onClose();
    }

    private onClose()
    {
        this.moduleWindow.menuBack();
    }

    private itemData: ItemData|EquipData;

    private rewardList: ItemData[] = [];
    
    updateData(itemData: ItemData|EquipData)
    {
        this.itemData = itemData;
        this.rewardList = itemData.rewardItems
        this.m_list.numItems = this.rewardList.length;
        
    }

    private renderListItem(index: number, item: BagItem)
    {
        let data = this.rewardList[index];
        item.renderItem(data);
    }
}