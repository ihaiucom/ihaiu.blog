/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelShopStruct from "../../Generates/GameHome/PanelShopStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import ShopCard from "./ShopCard";

export default class PanelShop extends PanelShopStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    itemDataList: ItemData[] = [];

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
        
        this.itemDataList = Game.moduleModel.item.list;

		let list = this.m_list;
        list.setVirtual();
        list.setVirtualAndLoop();
        list.setItemRenderer(this.renderListItem, this);
    }

    

	renderListItem(index: number, item: ShopCard)
	{
        let itemData = this.itemDataList[index];
		item.setItemData(itemData);
	}

    refreshList()
    {
        this.m_list.numItems = this.itemDataList.length;
        this.m_list.refreshVirtualList();
    }
    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        this.refreshList();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }


    


    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.ChooseGameFormat);
    }

}