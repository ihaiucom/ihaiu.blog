/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P3vEMainNewViewStruct from "../../Generates/GameMatchUI/P3vEMainNewViewStruct";
import MatchWindowUI from "./MatchWindowUI";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class P3vEMainNewView extends P3vEMainNewViewStruct
{
    private static PAGE:number = 5;

    // 窗口显示
    onWindowShow(): void
    {
        let windowUI = <MatchWindowUI>this.parent
        if (windowUI.m_state.selectedIndex != P3vEMainNewView.PAGE) 
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
        
        
        this.m_btnMatch.onClick(this, this.StartAndCancelMatch);
        this.m_btnReturn.onClick(this, this.ReturnMainView);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.ReSet();
        this.m_btnMatch.offClick(this, this.StartAndCancelMatch);
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
            // Game.sender.battleMatch.matchStart(proto.PVPType.PVE_M3, Game.moduleModel.match.selectHeroId);
        } 
        else 
        {
            Game.sender.battleMatch.matchCancel();
        }
    }

    ReturnMainView()
    {
        Game.menu.open(MenuId.Home);
        Game.menu.close(MenuId.BattleMatch);
    }
}