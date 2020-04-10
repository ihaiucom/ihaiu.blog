/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import {EquipData} from "../../../GameModule/DataStructs/EquipData";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import {MenuId} from "../../../GameModule/MenuId";
import BagWindow,{EnumBagMenuType} from '../../../GameModule/ViewWindows/BagWindow';
import BagWindowUIStruct from "../../Generates/ModuleBag/BagWindowUIStruct";
import BagItem from '../CommonGame/BagItem';
import ItemType = proto.ItemType;
import MenuValidateRed from '../../../GameModule/MenuValidateRed';
import { MenuIndexId } from '../../../GameModule/MenuIndexId';

export default class BagWindowUI extends BagWindowUIStruct
{
    static readonly BAG_MAX = 100;

    moduleWindow: BagWindow;

    onWindowInited()
    {
        window['bagUI'] = this;
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.Bag);
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.on(fgui.Events.CLICK_ITEM,this,this.itemOnClick);
        this.m_tab.on(fgui.Events.STATE_CHANGED,this,this.onTabChange);
        Game.net.gamerNotifyItemChangeS2C.on(this.updateList, this);
        this.m_itemInfoView.onShow();
        this.m_equipInfoView.onShow();
        this.Reset();
        this.updateList();
        this.itemSelectedIndex = 0;
        this.equitSelectedIndex = 0;
        this.heroPiecesSelectedIndex = 0;
        // this.m_infoType.setSelectedPage("empty");

        // red
        this.RefreshRed();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_list.itemRenderer.recover();
        this.m_list.off(fgui.Events.CLICK_ITEM,this,this.itemOnClick);
        this.m_tab.off(fgui.Events.STATE_CHANGED,this,this.onTabChange);
        Game.net.gamerNotifyItemChangeS2C.off(this.updateList, this);
        this.m_itemInfoView.onHide();
        // this.m_equipInfoView.onHide();
        this.m_menuTab.setSelectedIndex(0);
        this.m_tab.setSelectedIndex(0);

        // red 设置所有物品可见
        let normaluids = Game.moduleModel.bag.SetAllNormalItemSaw();
        let piecesuids = Game.moduleModel.bag.SetAllPiecesItemSaw();

        if(normaluids.length || piecesuids.length) Game.sender.bag.sawItem(normaluids.concat(piecesuids));
    }

    /** 刷新红点 */
    RefreshRed()
    {
        // 道具
        MenuValidateRed.getInstance().openTab(MenuIndexId.BagNormal, null, this.m_btnNormal);

        // 装备
        MenuValidateRed.getInstance().openTab(MenuIndexId.BagEquip, null, this.m_btnEquip);

        // 信物
        MenuValidateRed.getInstance().openTab(MenuIndexId.BagPieces, null, this.m_btnPieces);
    }

    openTab(index: EnumBagMenuType, itemData?:ItemData)
    {
        let lastindex = this.m_tab.selectedIndex;
        this.m_menuTab.setSelectedIndex(index);
        if(index < EnumBagMenuType.ItemSell || !itemData)
        {
            this.m_tab.setSelectedIndex(index);
        }
        else
        {
            // let itemData = this.moduleWindow.menuParameter.args[0]
            this.m_subWindow.updateData(itemData,index,lastindex);
            this.m_subWindow.m_useType.setSelectedIndex(index - EnumBagMenuType.ItemSell);
            this.m_subWindow.visible = true;
        }
    }
    
    private itemSelectedIndex: number = 0;
    private equitSelectedIndex: number = 0;
    private heroPiecesSelectedIndex: number = 0;

    private get selectedIndex(): number
    {
        let index = 0;
        let tabIndex = this.m_tab.selectedIndex;
        if(tabIndex == 0)
            index = this.itemSelectedIndex;
        else if(tabIndex == 1)
            index = this.equitSelectedIndex;
        else if(tabIndex == 2)
            index = this.heroPiecesSelectedIndex;
        return index;
    }

    private set selectedIndex(index: number)
    {
        let tabIndex = this.m_tab.selectedIndex;
        if(tabIndex == 0)
            this.itemSelectedIndex = index;
        else if(tabIndex == 1)
            this.equitSelectedIndex = index;
        else if(tabIndex == 2)
            this.heroPiecesSelectedIndex = index;
    }

    private get dataList(): ItemData[] | EquipData[]
    {
        // if(this.m_tab.selectedIndex == 1)
        // {
        //     return Game.moduleModel.equip.BagDataList;
        // }
        let list: ItemData[] = [];
        let type: ItemType;
        // this.m_tab.selectedIndex == 2 && (type = ItemType.heroPieces);
        switch (this.m_tab.selectedIndex) {
            case 1:
                type = ItemType.equipment;
                break;
            case 2:
                type = ItemType.heroPieces;
                break;
        }
        list = Game.moduleModel.bag.getItemListByType(type);
        list.sort((a,b) =>
        {
            return a.id - b.id;
        })
        return list;
    }

    private get bagCapacity(): number
    {
        let capacity = 0;
        let selectedIndex = this.m_tab.selectedIndex;
        switch(selectedIndex)
        {
            case 0:
                capacity = Global.itemBag;
                break;
            case 1:
                capacity = Global.equipBag;
                break;
            case 2:
                capacity = Global.tokenBag;
                break;
            default:
                break;
        }
        return capacity;
    }

    private Reset()
    {
        this.itemSelectedIndex = 0;
        this.equitSelectedIndex = 0;
        this.heroPiecesSelectedIndex = 0;
    }

    private onTabChange()
    {
        this.updateList();
        // this.m_infoType.setSelectedPage("empty");
        // 清空上一个tab的红点
        
        switch (this.m_tab.previsousIndex) {
            case 0:
                let normaluids = Game.moduleModel.bag.SetAllNormalItemSaw();
                if (normaluids.length) Game.sender.bag.sawItem(normaluids);
                break;
            case 1:
                let equipuids = Game.moduleModel.bag.SetAllEquipItemSaw();
                if (equipuids.length) Game.sender.bag.sawItem(equipuids);
                break;
            case 2:
                let piecesuids = Game.moduleModel.bag.SetAllPiecesItemSaw();
                if (piecesuids.length) Game.sender.bag.sawItem(piecesuids);
                break;
        }
        this.RefreshRed();
    }

    private updateList()
    {
        this.m_list.numItems = BagWindowUI.BAG_MAX;//this.dataList.length; //
        this.m_list.selectedIndex = this.selectedIndex;
        let length = this.dataList.length > 0? this.dataList.length: 0;
        this.m_capacityLb.text = TEXT.BagCapacity.format(length,this.bagCapacity)
        let itemData = this.dataList[this.selectedIndex];
        
        let item = this.m_list.getChildAt(this.selectedIndex) as BagItem;
        this.updateInfoView(itemData);
        if(item)
        {
            item.m_select.setSelectedPage("yes");
        }
        else
        {
            item.m_select.setSelectedPage("no");
        }
    }

    private updateInfoView(itemData: ItemData | EquipData)
    {
        if(this.dataList.length <= 0)
        {
            this.m_infoType.setSelectedPage('normal');
            return;
        }
        if(this.m_tab.selectedPage == 'equip')
        {
            this.m_infoType.setSelectedPage('equip');
            let equipdata = Game.moduleModel.equip.GetDataByUID(itemData.uid);
            this.m_equipInfoView.updateView(<EquipData> equipdata);
        }
        else
        {
            this.m_infoType.setSelectedPage('item');
            this.m_itemInfoView.updateView(<ItemData>itemData);
        }
    }

    private renderListItem(index: number,item: BagItem)
    {
        let data = this.dataList[index];
        item.renderItem(data);
        item.m_select.setSelectedPage("no");

        if (data) 
        {
            MenuValidateRed.getInstance().openItem(MenuId.Bag, data, item);    
        }
        else
        {
            MenuValidateRed.getInstance().closeRed(item);  
        }
    }

    private itemOnClick(item: BagItem)
    {
        let index = this.m_list.getChildIndex(item);
        let itemData = this.dataList[index];
        if(!itemData)
        {
            return;
        }
        let beforeItem = this.m_list.getChildAt(this.selectedIndex) as BagItem;
        this.selectedIndex = index;
        this.updateInfoView(itemData);
        if(itemData && beforeItem)
        {
            beforeItem.m_select.setSelectedPage("no");
            item.m_select.setSelectedPage("yes");
        }
        // ItemTipsCtrl.ShowWithItem(item.displayObject,itemData,true);

        if (itemData instanceof ItemData && !itemData.isSaw) 
        {
            MenuValidateRed.getInstance().closeRed(item);  

            let data = Game.moduleModel.bag.getItemByUid(itemData.uid);
            data.isSaw = true;
            Game.sender.bag.sawItem([data.uid]);

            this.RefreshRed();  
        }
    }
}