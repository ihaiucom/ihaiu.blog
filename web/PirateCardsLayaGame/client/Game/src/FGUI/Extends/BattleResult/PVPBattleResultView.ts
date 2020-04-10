/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVPBattleResultViewStruct from "../../Generates/BattleResult/PVPBattleResultViewStruct";
import BattleResultWindow from "../../../GameModule/ViewWindows/BattleResultWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import { War } from "../../../GameWar/Logic/War";
import ResultType = proto.BattleResultType;

export default class PVPBattleResultView extends PVPBattleResultViewStruct
{
     /** 窗口 */
     moduleWindow: BattleResultWindow;

     private canExit:boolean = false;
     
     /** 窗口显示 */
     show(msg: proto.GamerNotifyNewPVPResultS2C ): void
     {
         let page = msg.result > ResultType.Draw ? "fail": 'win';
         this.m_View.setSelectedPage(page);
         let danInfo = Game.moduleModel.pvp.danInfo;
         this.m_panel.updateView(danInfo);
         this.m_costTime.text = "战斗耗时：" + msg.costTime;
         this.m_combo.text = "最高连击" + msg.ComboTime;
         if(!msg.BaseScore)
             this.m_baseScore.text = "本场未获积分";
        else
        {
            if(msg.result > ResultType.Draw)
                this.m_baseScore.text = msg.BaseScore ? "保级 -" + msg.BaseScore : "";
            else
                this.m_baseScore.text = msg.BaseScore ? "本场比赛 +" + msg.BaseScore : "";
        }

         this.m_streakScore.text = msg.StreakScore ? "连胜 +" + msg.StreakScore : "";
         this.m_strongEnemyScore.text = msg.StrongEnemyScore ? "连胜 +" + msg.StrongEnemyScore : "";
         this.m_panel.m_confirmBtn.onClick(this, this.onClickExit);
 
         this.canExit = true;
         Laya.timer.once(2000, this, () => {
             if (Game.user.isShowLevelUp)
                 Game.menu.open(MenuId.PlayerLevelUpWindow);
         });
     }
 
     /** 窗口隐藏 */
     hide()
     {
         this.m_panel.m_confirmBtn.offClick(this, this.onClickExit);
         this.canExit = false;
     }
 
     onClickExit()
     {
         if(this.canExit)
         {
             War.exit();
             this.moduleWindow.menuBack();
         } 
     }
}