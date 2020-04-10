/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SettingViewStruct from "../../Generates/GameWar3DUI/SettingViewStruct";
import { War } from "../../../GameWar/Logic/War";
import { EnumBattleState } from "../../../GameWar/Logic/Enum/EnumBattleState";
import Game from "../../../Game";

export default class SettingView extends SettingViewStruct
{
    /** 窗口显示 */
    onWindowShow()
    {
        this.m_btnContinu.text = "继续";
        this.m_btnContinu.onClick(this, this.OnContinue);
        this.m_btnReset.onClick(this, this.OnReset);
        this.m_btnExite.onClick(this, this.OnExit);
        this.m_btnError.onClick(this, this.OnError)
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
       this.m_btnContinu.offClick(this, this.OnContinue);
       this.m_btnReset.offClick(this, this.OnReset);
       this.m_btnExite.offClick(this, this.OnExit);
       this.m_btnError.offClick(this, this.OnError)
        this.Hide();
    }

    OnContinue()
    {
        War.unpause();
        this.Hide();
    }

    OnReset()
    {
        War.quit();
        War.launch();
        this.Hide();
    }

    OnExit()
    {
        let teamModule = Game.moduleModel.team
        if (teamModule.GetTeam() && !teamModule.IsOnlySelf()) 
        {   
            Game.system.toastText("离开队伍！");
            Game.moduleModel.team.ClearTeam();
            Game.sender.team.TeamExit();
        }
        War.quit();
        this.Hide();
    }

    OnError()
    {
        War.exit(true);
        this.Hide();
    }
    
    Show( index: int = 0 )
    {
        this.m_state.selectedIndex = index;

        if(War.battleState == EnumBattleState.Runing)
        {
            War.pause();
        }
        this.visible = true;
    }

    Hide()
    {
        this.visible = false;
    }

}