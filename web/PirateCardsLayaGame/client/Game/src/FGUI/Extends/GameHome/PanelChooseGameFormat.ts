/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelChooseGameFormatStruct from "../../Generates/GameHome/PanelChooseGameFormatStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class PanelChooseGameFormat extends PanelChooseGameFormatStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_format4x4.isFourXFour = true;
        this.m_format4x4.ColumnCount = 4;
        this.m_format4x4.RowCount = 4;
        this.m_format4x4.coin = 700;
    }

    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }

    


    OnClickPlayBtn()
    {
        Game.menu.open(MenuId.War)
    }
}