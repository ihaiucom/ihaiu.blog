import ModuleConfig from "../GameFrame/Module/ModuleConfig";
import MWindow from "../GameFrame/Module/MWindow";
import {MenuId} from './MenuId';
import BagWindow from './ViewWindows/BagWindow';
import BattlePlanWindow from './ViewWindows/BattlePlanWindow';
import BattleResultWindow from './ViewWindows/BattleResultWindow';
import DraugWindow from './ViewWindows/DraugWindow';
import DuelTempWindow from './ViewWindows/DuelTempWindow';
import EquipWindow from './ViewWindows/EquipWindow';
import GamePlayerInfoWindow from './ViewWindows/GamePlayerInfoWindow';
import GahsaponWindow from './ViewWindows/GashaponWindow';
import HeroWindow from './ViewWindows/HeroWindow';
import HomeWindow from "./ViewWindows/HomeWindow";
import LoginWindow from "./ViewWindows/LoginWindow";
import MatchWindow from './ViewWindows/MatchWindow';
import MoneyWindow from './ViewWindows/MoneyWindow';
import PowerWindow from './ViewWindows/PowerWindow';
import PVPHallWindow from './ViewWindows/PVPHallWindow';
import QuestWindow from './ViewWindows/QuestWindow';
import RankWindow from './ViewWindows/RankWindow';
import SectionWindow from './ViewWindows/SectionWindow';
import TeamWindow from './ViewWindows/TeamWindow';
import War3DWindow from './ViewWindows/War3DWindow';
import WelfareWindow from './ViewWindows/WelfareWindow';
import SectionDetailWindow from './ViewWindows/SectionDetailWindow';
import SecretBookWindow from "./ViewWindows/SecretBookWindow";
import SecretBookListWindow from "./ViewWindows/SecretBookListWindow";
import SecretBookDetailWindow from "./ViewWindows/SecretBookDetailWindow";
import NewSeasonWindow from './ViewWindows/NewSeasonWindow';
import PlayerLevelUpWindow from './ViewWindows/PlayerLevelUpWindow';
import PVEHallWindow from './ViewWindows/PVEHallWindow';
import SecretLandWindow from './ViewWindows/SecretLandWindow';
import SecretLandAffixWindow from './ViewWindows/SecretLandAffixWindow';
import SecretLandRollWindow from './ViewWindows/SecretLandRollWindow';
import AffixWindow from "./ViewWindows/AffixWindow";
import SecretLandReadyWindow from "./ViewWindows/SecretLandReadyWindow";
import CommonSkillWindow from "./ViewWindows/CommonSkillWindow";
import PlotWindow from "./ViewWindows/PlotWindow";

//======================
// 模块配置
//----------------------
export default class MenuWindows {
    private static _dict: Dictionary<MenuId, ModuleConfig>;
    static get dict(): Dictionary<MenuId, ModuleConfig>
    {
        if(!this._dict)
        {
            this._dict = new Dictionary<MenuId, ModuleConfig>();
        }
        return this._dict;
    }

    static get(menuId: MenuId): ModuleConfig {
        return MenuWindows.dict.getValue(menuId);
    }

    static add<T extends MWindow>(menuId: MenuId, windowClass: { new(): T }) {
        // 请在该地方配置menuId对应的 MWindow
        MenuWindows.dict.add(menuId, new ModuleConfig(menuId, windowClass));
    }

    static install() {

        MenuWindows.add(MenuId.Login, LoginWindow);
        MenuWindows.add(MenuId.Home, HomeWindow);
        MenuWindows.add(MenuId.Sections, SectionWindow);
        MenuWindows.add(MenuId.WarWindowUI, War3DWindow);
        MenuWindows.add(MenuId.BattleResultWindow, BattleResultWindow);
        MenuWindows.add(MenuId.BattleMatch, MatchWindow);
        MenuWindows.add(MenuId.Gashapon,GahsaponWindow);
        MenuWindows.add(MenuId.Hero, HeroWindow);
        MenuWindows.add(MenuId.Bag, BagWindow);
        MenuWindows.add(MenuId.Draug, DraugWindow);
        MenuWindows.add(MenuId.BattlePlan, BattlePlanWindow);
        MenuWindows.add(MenuId.PlayerInfo, GamePlayerInfoWindow);
        MenuWindows.add(MenuId.Power, PowerWindow);
        MenuWindows.add(MenuId.Welfare, WelfareWindow);
        MenuWindows.add(MenuId.Money, MoneyWindow);
        MenuWindows.add(MenuId.Home, HomeWindow);
        MenuWindows.add(MenuId.Equip, EquipWindow);
        MenuWindows.add(MenuId.Team, TeamWindow);
        MenuWindows.add(MenuId.PVPHall,PVPHallWindow);
        MenuWindows.add(MenuId.DuelTemp,DuelTempWindow);
        MenuWindows.add(MenuId.Rank,RankWindow);
        MenuWindows.add(MenuId.Quest,QuestWindow);
        MenuWindows.add(MenuId.SubMenuSectionDetail,SectionDetailWindow);
        MenuWindows.add(MenuId.PVEHall,PVEHallWindow);
        MenuWindows.add(MenuId.SecretBook,SecretBookWindow);
        MenuWindows.add(MenuId.SecretBookListWindow,SecretBookListWindow);
        MenuWindows.add(MenuId.SecretBookDetailWindow,SecretBookDetailWindow);
        MenuWindows.add(MenuId.SecretLand,SecretLandWindow);
        MenuWindows.add(MenuId.SecretLandRoll,SecretLandRollWindow);
        MenuWindows.add(MenuId.SecretLandAffix,SecretLandAffixWindow);
        MenuWindows.add(MenuId.AffixTips,AffixWindow);
        MenuWindows.add(MenuId.SecretLandReady,SecretLandReadyWindow);
        MenuWindows.add(MenuId.NewSeasonWindow,NewSeasonWindow);
        MenuWindows.add(MenuId.PlayerLevelUpWindow,PlayerLevelUpWindow);
        MenuWindows.add(MenuId.CommonSkill,CommonSkillWindow);
        MenuWindows.add(MenuId.Plot, PlotWindow);
    }
}