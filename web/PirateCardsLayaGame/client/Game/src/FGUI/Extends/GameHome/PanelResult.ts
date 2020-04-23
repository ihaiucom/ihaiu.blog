/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelResultStruct from "../../Generates/GameHome/PanelResultStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GameStatus from "../../../War/Datas/GameStatus";
import War from "../../../War/War";

export default class PanelResult extends PanelResultStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_homeBtn.onClick(this, this.OnClickHome);
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
    }

    // 该组件所在Tab 显示
    onTabShow(): void
    {
        this.SetData();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }

    SetData()
    {
        this.m_coinCurrent.text = GameStatus.goldPerGame + "";
        this.m_coinMax.text = GameStatus.bestGoldPerGame + "";

    }

    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.ChooseHero);
    }

    OnClickHome()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.MenuMenu);
    }
}