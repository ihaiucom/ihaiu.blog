/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvPMainNewViewStruct from "../../Generates/GameMatchUI/PvPMainNewViewStruct";
import MatchWindowUI from "./MatchWindowUI";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import MatchWindow from '../../../GameModule/ViewWindows/MatchWindow';
import { WarSetting } from "../../../GameWar/Logic/WarSetting";
import PvpType = proto.PVPType;
import IGamerMatch = proto.IGamerMatch;
import GamerNotifyPVPLoadingS2C = proto.GamerNotifyPVPLoadingS2C;
import MatchLHeroItem from "./MatchLHeroItem";
import HeroGroupData from '../../../GameModule/DataStructs/HeroGroupData';
import TEXT from '../../../Config/Keys/TEXT';
import MatchRHeroItem from "./MatchRHeroItem";
import DanInfoData from '../../../GameModule/DataStructs/DanInfoData';
import { War } from '../../../GameWar/Logic/War';
import {EnumBattleState} from "../../../GameWar/Logic/Enum/EnumBattleState";

export default class PvPMainNewView extends PvPMainNewViewStruct
{
    moduleWindow: MatchWindow;
    private static PAGE:number = 0;

    private heroGroup: HeroGroupData;
   
    private isSend: boolean = false;

    private value: number = 0;

    private state: number = 0;

    private teamGamers: IGamerMatch[];

    private enemyGamers: IGamerMatch[];

    onWindowInit()
    {
    }

    // 窗口显示
    onWindowShow(): void
    {
        Game.event.add("MATCH_END",this.CheckMatchState,this);
        let windowUI = <MatchWindowUI>this.parent
        if (windowUI.m_state.selectedIndex != PvPMainNewView.PAGE) 
        {
            return;
        }
        let index = this.moduleWindow.menuParameter.args[0];
        this.m_matchState.setSelectedIndex(index);
        if(index == 0)
        {
            this.MatchBegin();
            this.SetPlayer1Data();
            this.CheckMatchState();
            this.m_btnMatch.selected = true;
            this.m_btnMatch.onClick(this, this.StartAndCancelMatch);
        }
        else
        {
            // this.m_player1.visible = false;
            // this.m_player2.visible = false;
            let matchInfo = Game.moduleModel.match.matchInfo;
            let player1 = matchInfo.gamers.find((gamer) => gamer.mini.id == Game.user.id);
            this.SetPlayer1Data(player1);
            let player2 = matchInfo.gamers.find((gamer) => gamer.mini.id != Game.user.id);
            this.SetPlayer2Data(player2);
        }
        // this.m_btnReturn.onClick(this, this.ReturnMainView);
        // Game.net.gamerNotifyPVPLoadingS2C.on(this.ReceiveValue,this)
        
    }

   

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.event.remove("MATCH_END",this.CheckMatchState,this);
        this.ReSet();
        this.m_btnMatch.offClick(this, this.StartAndCancelMatch);
        Laya.timer.clearAll(this);
    }

    private CheckMatchState()
    {
        let matchInfo = Game.moduleModel.match.matchInfo;
        if(matchInfo)
            this.MatchEnd(matchInfo);
    }

    private MatchBegin()
    {
        this.m_matchState.setSelectedPage('matching');
        this.MatchCount(true);
        this.RunEnemyAnimation();
        Laya.timer.loop(1000,this,this.MatchCount,null,false);
        Laya.timer.loop(500,this,this.RunEnemyAnimation, null, false);
    }

    private MatchEnd(matchInfo)
    {
        this.ClearEnemyAnimation();
        this.m_matchState.setSelectedPage('matched');
        Laya.timer.clear(this,this.MatchCount);
        let player2 = matchInfo.gamers.find((gamer) => gamer.mini.id != Game.user.id);
        this.SetPlayer2Data(player2);
    }

    private ClearEnemyAnimation()
    {
        Laya.timer.clear(this,this.RunEnemyAnimation);
        this.m_player2Item0.StopAnimation();
        this.m_player2Item1.StopAnimation();
        this.m_player2Item2.StopAnimation();
    }
    
    private RunEnemyAnimation(duration: number = 500)
    {
        let heroList = Game.config.hero.GetRandomHeroList;
        for(let index = 0;index < heroList.length;index++)
        {
            let item = <MatchRHeroItem> this['m_player2Item' + index];
            item.RunAnimation(heroList[index], duration);
        }
    }

    private _matchCount = 0;
    private MatchCount(isBegin: boolean = false)
    {
        isBegin && (this._matchCount = 0);
        let minites = Math.floor(this._matchCount / 60) + "";
        minites = minites.padStart(2,'0');
        let seconds = this._matchCount % 60 + "";
        seconds = seconds.padStart(2,'0');
        this.m_matchTime.text = minites + ":" + seconds;
        this._matchCount++;
    }


   

    private SetPlayer1Data(player?: proto.IGamerMatch)
    {
        if(!player)
            this.heroGroup = Game.moduleModel.pvp.SelectedHeroGroup;
        let heroList = this.heroGroup? this.heroGroup.posList.map((pos)=>pos.heroId): player.heroList.map((hero)=>hero.id);
        for(let index = 0;index < heroList.length;index++)
        {
            let item = <MatchLHeroItem> this['m_player1Item' + index];
            item.UpdateView(heroList[index]);
        }
        this.m_headIcon1.UpdateView(Game.user.headIconUrl);
        this.m_name1.text = Game.user.name;
        let danData = Game.moduleModel.pvp.danInfo;
        if(player)
            danData = DanInfoData.Create(player.danInfo);
        this.m_danName1.text = danData.name;
        this.m_winTimes1.text = TEXT.DuelTempWinTimes.format(danData.BattleWinTimes);

    }
    private SetPlayer2Data(player: proto.IGamerMatch)
    {
        let heroList = player.heroList;
        for(let index = 0;index < heroList.length;index++)
        {
            let item = <MatchRHeroItem> this['m_player2Item' + index];
            item.UpdateView(heroList[index].id);
        }
        let danData = DanInfoData.Create(player.danInfo);
        let avatar = Game.config.avatar.getConfig(player.mini.avatar);
        if(!avatar) avatar = Game.config.avatar.getConfig(1001);
        this.m_headIcon2.UpdateView(avatar.iconUrl);
        this.m_name2.text = player.mini.name;
        this.m_danName2.text = danData.name;
        this.m_winTimes2.text = TEXT.DuelTempWinTimes.format(danData.BattleWinTimes);
    }


    ReSet()
    {
        if (this.m_btnMatch.selected) 
        {
            Game.sender.battleMatch.matchCancel();
        }
        this.m_btnMatch.selected = false;
    }

    async StartAndCancelMatch()
    {
        if (this.m_btnMatch.selected) 
        {
            // let model = Game.moduleModel.battlePlan;
            // if(model.nowSelectTeam < 1 || model.nowSelectTeam > 4)
            // {
            //     GameLog.Log(EnumLogLevel.Error, "备战选择出错");
            //     return;
            // }

            // let list = [];
            // let items = model.GetTeamInfo(model.nowSelectTeam).heroGroupPosDict.getValues();
            // for(let item of items)
            // {
            //     if(item.heroId != 0)
            //     {
            //         list.push(item.heroId);
            //     }
            // }

            // Game.sender.battleMatch.matchStart(PKType.PVP_M1V1, list);
        } 
        else 
        {
           await Game.sender.battleMatch.matchCancel();
           this.moduleWindow.menuBack();
        }
    }

    ReturnMainView()
    {
        Game.menu.open(MenuId.Home);
        Game.menu.close(MenuId.BattleMatch);
    }
}