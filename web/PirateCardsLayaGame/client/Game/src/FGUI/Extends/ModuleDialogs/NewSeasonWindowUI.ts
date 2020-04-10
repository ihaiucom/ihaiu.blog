/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NewSeasonWindowUIStruct from "../../Generates/ModuleDialogs/NewSeasonWindowUIStruct";
import NewSeasonWindow from '../../../GameModule/ViewWindows/NewSeasonWindow';
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";

export default class NewSeasonWindowUI extends NewSeasonWindowUIStruct
{
    moduleWindow: NewSeasonWindow;
     // 窗口显示
     onWindowShow(): void
     {
         this.m_oldSeason.m_confirmBtn.onClick(this,this.bgOnclick);
         this.m_newSeason.m_confirmBtn.onClick(this,this.bgOnclick);
         let seasonId = this.moduleWindow.menuParameter.args[0];
         this.newSeasion = seasonId;
         this.m_state.setSelectedIndex(0);
         let danInfo = Game.moduleModel.pvp.danInfo;
         this.m_newSeason.updateView(danInfo);
         danInfo = Game.moduleModel.pvp.GetDanInfoBySeasonId(seasonId-1);
         this.m_oldSeason.updateView(danInfo);
         let danName = Game.moduleModel.pvp.GetDanInfoBySeasonId(seasonId-1).name;
         this.m_title.text = TEXT.DuelTempOldSeason.format(danName);
     }

     private newSeasion: number = 1;
 
     // 窗口隐藏
     onWindowHide(): void
     {
         this.m_oldSeason.m_confirmBtn.offClick(this,this.bgOnclick);
         this.m_newSeason.m_confirmBtn.offClick(this,this.bgOnclick);
    }

     bgOnclick()
     {
         if(this.m_state.selectedIndex == 0)
         {
             this.m_state.setSelectedIndex(1);
             let danName = Game.moduleModel.pvp.danInfo.name;
             this.m_title.text = TEXT.DuelTempNewSeason.format(danName);
         }
        else
            this.moduleWindow.menuBack();
     }
}