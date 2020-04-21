/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelShopStruct from "../../Generates/GameHome/PanelShopStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class PanelShop extends PanelShopStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        console.log("PanelShop onTabShow");
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        console.log("PanelShop onTabHide");

    }

    


    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.ChooseGameFormat);
    }

}