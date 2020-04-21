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
    }

    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        console.log("PanelChooseGameFormat onTabShow");
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        console.log("PanelChooseGameFormat onTabHide");

    }

    


    OnClickPlayBtn()
    {
        Game.menu.open(MenuId.War)
    }
}