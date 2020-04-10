/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerLevelUpWindowUIStruct from "../../Generates/ModuleDialogs/PlayerLevelUpWindowUIStruct";
import PlayerLevelUpWindow from "../../../GameModule/ViewWindows/PlayerLevelUpWindow";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export default class PlayerLevelUpWindowUI extends PlayerLevelUpWindowUIStruct
{
     moduleWindow: PlayerLevelUpWindow;
     // 窗口显示
     onWindowShow(): void
     {
          this.m_bg.onClick(this,this.menuBack);
          this.InitView();
     }
 
     // 窗口隐藏
     onWindowHide(): void
     {
          Game.user.isShowLevelUp = false;
          // Game.event.dispatch(GameEventKey.GameFrame_Player_Levelup);
          this.m_bg.offClick(this,this.menuBack);
     }

     InitView()
     {
          this.m_playerLevel.text = Game.user.level - 1 + "";
          this.m_newPlayerLevel.text = Game.user.level + "";
          let power = Game.moduleModel.power;
          let playerConfig = Game.config.playerLevel.getConfig(Game.user.level-1);
          let newConfig = Game.config.playerLevel.getConfig(Game.user.level);
          this.m_fatigueNum.text = power.fatigueNum-newConfig.addPower + "";
          this.m_newFatigueNum.text = power.fatigueNum + "";
          this.m_fatigueMax.text = playerConfig.maxPower + "";
          this.m_newFatigueMax.text = newConfig.maxPower + "";
          this.m_heroLevelMax.text = Game.user.level + "";
          this.m_newHeroLevelMax.text =  Game.user.level + 1 + "";
     }

     private menuBack()
     {
          this.moduleWindow.menuBack();
     }
}