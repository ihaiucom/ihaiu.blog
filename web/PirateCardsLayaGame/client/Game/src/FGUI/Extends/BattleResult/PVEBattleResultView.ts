/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import BattleResultWindow from "../../../GameModule/ViewWindows/BattleResultWindow";
import { War } from "../../../GameWar/Logic/War";
import PVEBattleResultViewStruct from "../../Generates/BattleResult/PVEBattleResultViewStruct";
import ResultType = proto.BattleResultType;

export default class PVEBattleResultView extends PVEBattleResultViewStruct
{
    /** 窗口 */
    moduleWindow: BattleResultWindow;

    private canExit:boolean = false;
    
    /** 窗口显示 */
    show(msg: proto.GamerNotifyNewPVPResultS2C ): void
    {
        let overType: ResultType = ResultType.TotalLoss;
        if (msg.battleStar > 0) {
            overType = ResultType.TotalWin;
            this.m_win.updateView(msg);
        }
        else
        {
            
        }

        let tabIndex = overType == ResultType.TotalLoss ? 1 : 0;
        this.m_state.setSelectedIndex(tabIndex);

        this.m_bg.onClick(this, this.onClickExit);

        Laya.timer.once(2000, this, () => {
            this.canExit = true;
            if (Game.user.isShowLevelUp)
                Game.menu.open(MenuId.PlayerLevelUpWindow);
        });
    }

    /** 窗口隐藏 */
    hide()
    {
        this.m_bg.offClick(this, this.onClickExit);
        this.canExit = false;
    }



    onClickExit()
    {
        if (this.canExit)
        {
            War.exit();
            this.moduleWindow.menuBack();
        } 
    }
}