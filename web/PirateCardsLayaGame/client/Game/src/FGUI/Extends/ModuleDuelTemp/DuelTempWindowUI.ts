/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from "../../../Config/Keys/TEXT";
import Game from '../../../Game';
import GameEventKey from "../../../GameEventKey";
import GameLog,{EnumLogLevel} from "../../../GameLog";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import {MenuId} from '../../../GameModule/MenuId';
import {EnumRankTab} from '../../../GameModule/ViewWindows/RankWindow';
import DuelTempWindowUIStruct from "../../Generates/ModuleDuelTemp/DuelTempWindowUIStruct";
import DuelTempHero from './DuelTempHero';

export default class DuelTempWindowUI extends DuelTempWindowUIStruct
{
    private get model()
    {
        return Game.moduleModel.pvp;
    }

    private heroList: number[] = [];
    
    
    onWindowInited(): void
    {
        window['duel'] = this;
    }

    openTab(tabIndex: number | string)
    {
        if (Number(tabIndex) != this.m_tab.selectedIndex)  {
            this.m_tab.selectedIndex = Number(tabIndex);
        }
    }

     // 窗口显示
     onWindowShow(): void
     {
         this.m_head.SetWindow(MenuId.DuelTemp);
         this.m_list.setItemRenderer(this.renderListItem, this);
         this.m_dayBtn.delayOnClick(this, this.dailyTaskBtnOnClick);
         this.m_weekBtn.delayOnClick(this, this.weeklyTaskBtnOnClick);
         this.m_seasonBtn.delayOnClick(this, this.seasonBtnOnClick);
         this.m_ladderBtn.delayOnClick(this, this.ladderBtnOnClick);
         this.m_fameBtn.delayOnClick(this, this.fameBtnOnClick);
         this.m_matchBtn.delayOnClick(this, this.matchBtnOnClick);
         this.m_selectBtn.delayOnClick(this, this.selectBattlePlan);
         Game.net.gamerNotifyNewSeasonS2C.on(this.notifyNewSeason, this);
         Game.net.gamerNotifyDanInfoS2C.on(this.updateView, this);
         Game.event.add(GameEventKey.GameFrame_BattlePlanSelectedTeam, this.updateView, this);
        
        this.updateView();
     }
 
     // 窗口隐藏
     onWindowHide(): void
     {
         this.heroList.length = 0;
         if(this.m_list.itemRenderer)
             this.m_list.itemRenderer.recover();
        this.m_dayBtn.delayOffClick(this, this.dailyTaskBtnOnClick);
        this.m_weekBtn.delayOffClick(this, this.weeklyTaskBtnOnClick);
         this.m_seasonBtn.delayOffClick(this, this.seasonBtnOnClick);
         this.m_ladderBtn.delayOffClick(this,this.ladderBtnOnClick);
         this.m_fameBtn.delayOffClick(this,this.fameBtnOnClick);
         this.m_matchBtn.delayOffClick(this, this.matchBtnOnClick);
         this.m_selectBtn.delayOffClick(this, this.selectBattlePlan);
         Game.net.gamerNotifyNewSeasonS2C.off(this.notifyNewSeason, this);
         Game.net.gamerNotifyDanInfoS2C.on(this.updateView, this);
         Game.event.remove(GameEventKey.GameFrame_BattlePlanSelectedTeam, this.updateView, this);
    }

     /**@private              私有方法                    */
 
     private notifyNewSeason()
     {

     }

     private renderListItem(index: number, item: DuelTempHero)
     {
         item.UpdateView(this.heroList[index]);
     }

     async updateView()
     {
         this.heroList.length = 0;
         let heroGroup = this.model.SelectedHeroGroup;
         if(heroGroup)
         {
             this.m_selectedGroup.text = heroGroup.name;
             for (let pos of heroGroup.posList) {
                pos.heroId && this.heroList.push(pos.heroId);
             }
         }
         this.m_list.numItems = this.heroList.length;
         let danInfo = this.model.danInfo;
        await Game.sender.pvp.getDanInfo();
        if(danInfo.hasNewSeason)
        {
        }
        this.m_infoView.updateView();
        this.m_seasonPanel.updateView();
         this.m_rewardPoint.UpdateView(danInfo);
        this.m_loseBaseJDScore.text = danInfo.loseBaseJDScore + "分 = 1次保星";
        this.m_maxJDScore.text = danInfo.maxJDScore + "分 = 1次升星";
     }

     
     /** 选择队伍 */
     selectBattlePlan()
     {
         Game.menu.openTab(MenuId.BattlePlan, 2);
     }
     
     /** 每日奖励 */
     private dailyTaskBtnOnClick()
     {
         Game.menu.openTab(MenuId.DuelTemp, 1);
         this.m_dailyTask.updateView();
     }
     /** 每周奖励 */
     private weeklyTaskBtnOnClick()
     {
         Game.menu.openTab(MenuId.DuelTemp, 2);
         this.m_weeklyTask.updateView();
     }
     /** 赛季奖励 */
     private seasonBtnOnClick()
     {
         Game.menu.openTab(MenuId.DuelTemp, 3);
     }

     /** 天梯排行 */
     private ladderBtnOnClick()
     {
        Game.menu.openTab(MenuId.Rank, EnumRankTab.LadderCurrent);
     }

     /** 名人堂 */
    private fameBtnOnClick()
    {
        Game.menu.openTab(MenuId.Rank, EnumRankTab.FameHistory);
    }

    private async matchBtnOnClick()
    {
        if (Game.moduleModel.team.GetTeam()) 
        {
            Game.system.toastText("队伍中，无法匹配！");
            return;    
        }
        if(!this.model.SelectedHeroGroup)
        {
            Game.system.toastText(TEXT.DuelSelectHeroGroupFirst);
            return;
        }
        let herogroup = this.model.SelectedHeroGroup;
        if(herogroup.id < 1 || herogroup.id > 4)
        {
            GameLog.Log(EnumLogLevel.Error, "备战选择出错");
            return;
        }
        let ready = await Game.sender.battleMatch.matchStart(proto.PVPType.PVP_M1V1, 0, herogroup.id, null);
        if(ready)
            Game.menu.openTab(MenuId.BattleMatch, 0, 0);
    }

   

}