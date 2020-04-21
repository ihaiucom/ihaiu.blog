/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopPanelStruct from "../../Generates/GameHome/MenuTopPanelStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import GameStatus from "../../../War/Datas/GameStatus";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class MenuTopPanel extends MenuTopPanelStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    get tabIndex():HomeTabType
    {
        var openIndex  = HomeTabType.MenuMenu;
        if(this.moduleWindow && this.moduleWindow.menuParameter && this.moduleWindow.menuParameter.openIndex !== undefined)
        {
            openIndex = <any> this.moduleWindow.menuParameter.openIndex;
        }
        return openIndex;
    }

    // 窗口初始化完毕
    onWindowInited(): void
    {
        GameStatus.sGold.add(this.OnGoldChange, this);
        this.m_homeBtn.onClick(this, this.OnClickHomeBtn);
        this.m_prevBtn.onClick(this, this.OnClickPrevBtn);

        this.moduleWindow.sOpenTab.add(this.OnOpenTab, this);
        this.OnOpenTab(HomeTabType.MenuMenu);
    }

    
    // 窗口销毁
    onWindowDestory(): boolean
    {
        GameStatus.sGold.remove(this.OnGoldChange, this);
        return false;
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.OnGoldChange();
    }
    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        this.OnGoldChange();
        console.log("MenuTopPanel onTabShow");

    }

    OnOpenTab(openIndex: HomeTabType)
    {
        this.visible = openIndex > HomeTabType.MenuMenu;
        this.m_prevBtn.visible = openIndex > HomeTabType.ChooseHero && openIndex < HomeTabType.Result;
        this.m_homeBtn.visible = openIndex > HomeTabType.MenuMenu && openIndex < HomeTabType.Result;
    }

    OnGoldChange()
    {
        this.m_coinText.text = GameStatus.gold + "";
    }

    OnClickHomeBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.MenuMenu);
    }

    OnClickPrevBtn()
    {
        var openIndex  = HomeTabType.MenuMenu;
        if(this.moduleWindow && this.moduleWindow.menuParameter && this.moduleWindow.menuParameter.openIndex !== undefined)
        {
            openIndex = <any> this.moduleWindow.menuParameter.openIndex;
        }
        if(openIndex > 0)
        {
            openIndex = openIndex - 1;
        }

        Game.menu.openTab(MenuId.Home, openIndex);
    }
    

}