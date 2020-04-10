/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvEMainViewStruct from "../../Generates/GameMatchUI/PvEMainViewStruct";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import MatchWindowUI from "./MatchWindowUI";

export default class PvEMainView extends PvEMainViewStruct
{
    private _match: boolean;
    private _time: number;
    
    private static PAGE:number = 1;

    // 窗口显示
    onWindowShow(): void
    {
        let windowUI = <MatchWindowUI>this.parent
        if (windowUI.m_state.selectedIndex != PvEMainView.PAGE) 
        {
            return;
        }
        
        
        this.m_btnMatch.onClick(this, this.StartAndCancelMatch);
        this.m_btnReturn.onClick(this, this.ReturnMainView);
        Game.event.add("MATCH_START", this.StartTime, this);
        Game.event.add("MATCH_END", this.EndTime, this);
        Game.event.add("MATCH_CANCEL", this.ResetTime, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.ReSet();
        this.m_btnMatch.offClick(this, this.StartAndCancelMatch);
        this.m_btnReturn.offClick(this, this.ReturnMainView);
        Game.event.remove("MATCH_START", this.StartTime, this);
        Game.event.remove("MATCH_END", this.EndTime, this);
        Game.event.remove("MATCH_CANCEL", this.ResetTime, this);
    }

    ReSet()
    {
        this.m_btnMatch.title = "开始";
        this.m_btnMatch.touchable = true;
        this._match= false;
        this._time = 0;
        this.m_labTime.text =  TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
    }

    StartAndCancelMatch()
    {
        if (!this._match) {
            this._match = true;
            this.m_btnMatch.title = "取消";
            // Game.sender.battleMatch.matchStart(proto.PVPType.PVE_M2, 0);
        } else {
            this._match = false;
            this.m_btnMatch.title = "开始";
            Game.sender.battleMatch.matchCancel();
        }
        
    }

    ReturnMainView()
    {
        Game.menu.open(MenuId.Home);
        Game.menu.close(MenuId.BattleMatch);
    }

    StartTime()
    {
        Engine.timer.loop(1000, this, this.CheckTime);
    }

    CheckTime()
    {
        this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
        this._time++;
    }

    EndTime()
    {
        this.m_btnMatch.title= "进入中..."
        this.m_btnMatch.touchable = false;
        this.m_labTime.text  = "匹配成功！";
        Engine.timer.clear(this, this.CheckTime);

        // CONFIG.SERVER_MODE = true;
    }

    ResetTime()
    {
        Engine.timer.clear(this, this.CheckTime);
        this._time = 0;
        this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
    }
}