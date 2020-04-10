import Game from "../../Game";
import { MenuId } from "../MenuId";
import HomeWindowUI from "../../FGUI/Extends/SystemModuleHome/HomeWindowUI";

export class GuideFinderHelper
{
    /**
     * 查找征战按钮
     */
    static FindBattleBtn() :fgui.GObject
    {
        let obj = null;
        let homeWinodw = Game.menu.getMenuCtl(MenuId.Home);
        if(homeWinodw && homeWinodw.moduleWindow.contentPane instanceof HomeWindowUI)
        {
            let window = homeWinodw.moduleWindow.contentPane as HomeWindowUI;
            obj = window.m_barBottom.m_btnStart;
        }
        
        return obj;
    }
}