/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvEMainNewViewStruct from "../../Generates/GameMatchUI/PvEMainNewViewStruct";
import MatchWindowUI from "./MatchWindowUI";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GameLog, { EnumLogLevel } from "../../../GameLog";

export default class PvEMainNewView extends PvEMainNewViewStruct
{
    private static PAGE:number = 1;

    // 窗口显示
    onWindowShow(): void
    {
        let windowUI = <MatchWindowUI>this.parent
        if (windowUI.m_state.selectedIndex != PvEMainNewView.PAGE) 
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
            let model = Game.moduleModel.battlePlan;
            if(model.nowSelectTeam < 1 || model.nowSelectTeam > 4)
            {
                GameLog.Log(EnumLogLevel.Error, "备战选择出错");
                return;
            }

            let list = [];
            let items = model.GetTeamInfo(model.nowSelectTeam).heroGroupPosDict.getValues();
            for(let item of items)
            {
                if(item.heroId != 0)
                {
                    list.push(item.heroId);
                }
            }

            // Game.sender.battleMatch.matchStart(proto.PVPType.PVE_M2, list);
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