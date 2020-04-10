/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2MainNewViewStruct from "../../Generates/GameMatchUI/P2vP2MainNewViewStruct";
import MatchWindowUI from "./MatchWindowUI";
import P2vP2MainView from "./P2vP2MainView";
import Game from "../../../Game";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import { MenuId } from "../../../GameModule/MenuId";
import MatchWindow from "../../../GameModule/ViewWindows/MatchWindow";

export default class P2vP2MainNewView extends P2vP2MainNewViewStruct
{
    private static PAGE:number = 2;
    
    // 窗口
    moduleWindow: MatchWindow;
    
    // 窗口显示
    onWindowShow(): void
    {
        let windowUI = <MatchWindowUI>this.parent
        if (windowUI.m_state.selectedIndex != P2vP2MainNewView.PAGE) 
        {
            return;
        }

        switch (Game.moduleModel.match.selectHeroId) {
            case 5:
                this.m_player1Item.m_role.selectedIndex = 0;
                break;
            case 6:
                this.m_player1Item.m_role.selectedIndex = 4;
                break;
        
            default:
                break;
        }

        this.m_btnMatch.on(fgui.Events.STATE_CHANGED,this,this.StartAndCancelMatch);
        this.m_btnReturn.onClick(this, this.ReturnMainView);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.ReSet();
        this.m_btnMatch.off(fgui.Events.STATE_CHANGED,this,this.StartAndCancelMatch);
        this.m_btnReturn.offClick(this, this.ReturnMainView);
    }

    ReSet()
    {
        if (this.m_btnMatch.selected) 
        {
            Game.sender.battleMatch.matchCancel();
        }
        this.m_btnMatch.selected = false;
    }

    StartAndCancelMatch()
    {
        if (this.m_btnMatch.selected) 
        {
            // Game.sender.battleMatch.matchStart(proto.PVPType.PVP_M2V2, Game.moduleModel.match.selectHeroId);
        } 
        else 
        {
            Game.sender.battleMatch.matchCancel();
        }
        
    }

    ReturnMainView()
    {
        this.moduleWindow.menuBack();
        Game.menu.close(MenuId.BattleMatch);
    }
}