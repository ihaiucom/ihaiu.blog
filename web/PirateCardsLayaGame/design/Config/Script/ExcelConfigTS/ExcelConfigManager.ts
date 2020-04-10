
import ExcelConfigReader from "./ExcelConfigReader";
import AAAShieldConfig from './ConfigExtends/AAAShieldConfig';
import ActivitiesConfig from './ConfigExtends/ActivitiesConfig';
import AvatarConfig from './ConfigExtends/AvatarConfig';
import BagConfig from './ConfigExtends/BagConfig';
import BattleFormulaConfig from './ConfigExtends/BattleFormulaConfig';
import ChapterConfig from './ConfigExtends/ChapterConfig';
import CheckPointConfig from './ConfigExtends/CheckPointConfig';
import CompoundConfig from './ConfigExtends/CompoundConfig';
import CountActivitiesConfig from './ConfigExtends/CountActivitiesConfig';
import DailyConfig from './ConfigExtends/DailyConfig';
import DraugConfig from './ConfigExtends/DraugConfig';
import DraugAwakenConfig from './ConfigExtends/DraugAwakenConfig';
import DraugSuitConfig from './ConfigExtends/DraugSuitConfig';
import DuelDanConfig from './ConfigExtends/DuelDanConfig';
import DuelRankingConfig from './ConfigExtends/DuelRankingConfig';
import DuelSeasonConfig from './ConfigExtends/DuelSeasonConfig';
import EquipExpConfig from './ConfigExtends/EquipExpConfig';
import EquipmentConfig from './ConfigExtends/EquipmentConfig';
import GashaponConfig from './ConfigExtends/GashaponConfig';
import GuideConfig from './ConfigExtends/GuideConfig';
import HeadPortraitConfig from './ConfigExtends/HeadPortraitConfig';
import HeroConfig from './ConfigExtends/HeroConfig';
import HeroExpConfig from './ConfigExtends/HeroExpConfig';
import HeroStarConfig from './ConfigExtends/HeroStarConfig';
import HeroTagConfig from './ConfigExtends/HeroTagConfig';
import HeroTeamConfig from './ConfigExtends/HeroTeamConfig';
import HeroTypeConfig from './ConfigExtends/HeroTypeConfig';
import ItemConfig from './ConfigExtends/ItemConfig';
import LoaderConfig from './ConfigExtends/LoaderConfig';
import LoadingConfig from './ConfigExtends/LoadingConfig';
import MailConfig from './ConfigExtends/MailConfig';
import MapConfig from './ConfigExtends/MapConfig';
import MenuConfig from './ConfigExtends/MenuConfig';
import MenuIndexConfig from './ConfigExtends/MenuIndexConfig';
import MonsterPropConfig from './ConfigExtends/MonsterPropConfig';
import MsgConfig from './ConfigExtends/MsgConfig';
import PlayerLevelConfig from './ConfigExtends/PlayerLevelConfig';
import PlayerNameConfig from './ConfigExtends/PlayerNameConfig';
import PlayListConfig from './ConfigExtends/PlayListConfig';
import PlotConfig from './ConfigExtends/PlotConfig';
import PowerConfig from './ConfigExtends/PowerConfig';
import PowerGiveConfig from './ConfigExtends/PowerGiveConfig';
import PropertyConfig from './ConfigExtends/PropertyConfig';
import PropValueConfig from './ConfigExtends/PropValueConfig';
import PvpMapConfig from './ConfigExtends/PvpMapConfig';
import QuestConfig from './ConfigExtends/QuestConfig';
import RewardConfig from './ConfigExtends/RewardConfig';
import ShopConfig from './ConfigExtends/ShopConfig';
import SkillConfig from './ConfigExtends/SkillConfig';
import SoundConfig from './ConfigExtends/SoundConfig';
import UnlockConfig from './ConfigExtends/UnlockConfig';
import WayConfig from './ConfigExtends/WayConfig';

import AAAShieldConfigReader from './ReaderExtends/AAAShieldConfigReader';
import ActivitiesConfigReader from './ReaderExtends/ActivitiesConfigReader';
import AvatarConfigReader from './ReaderExtends/AvatarConfigReader';
import BagConfigReader from './ReaderExtends/BagConfigReader';
import BattleFormulaConfigReader from './ReaderExtends/BattleFormulaConfigReader';
import ChapterConfigReader from './ReaderExtends/ChapterConfigReader';
import CheckPointConfigReader from './ReaderExtends/CheckPointConfigReader';
import CompoundConfigReader from './ReaderExtends/CompoundConfigReader';
import CountActivitiesConfigReader from './ReaderExtends/CountActivitiesConfigReader';
import DailyConfigReader from './ReaderExtends/DailyConfigReader';
import DraugConfigReader from './ReaderExtends/DraugConfigReader';
import DraugAwakenConfigReader from './ReaderExtends/DraugAwakenConfigReader';
import DraugSuitConfigReader from './ReaderExtends/DraugSuitConfigReader';
import DuelDanConfigReader from './ReaderExtends/DuelDanConfigReader';
import DuelRankingConfigReader from './ReaderExtends/DuelRankingConfigReader';
import DuelSeasonConfigReader from './ReaderExtends/DuelSeasonConfigReader';
import EquipExpConfigReader from './ReaderExtends/EquipExpConfigReader';
import EquipmentConfigReader from './ReaderExtends/EquipmentConfigReader';
import GashaponConfigReader from './ReaderExtends/GashaponConfigReader';
import GuideConfigReader from './ReaderExtends/GuideConfigReader';
import HeadPortraitConfigReader from './ReaderExtends/HeadPortraitConfigReader';
import HeroConfigReader from './ReaderExtends/HeroConfigReader';
import HeroExpConfigReader from './ReaderExtends/HeroExpConfigReader';
import HeroStarConfigReader from './ReaderExtends/HeroStarConfigReader';
import HeroTagConfigReader from './ReaderExtends/HeroTagConfigReader';
import HeroTeamConfigReader from './ReaderExtends/HeroTeamConfigReader';
import HeroTypeConfigReader from './ReaderExtends/HeroTypeConfigReader';
import ItemConfigReader from './ReaderExtends/ItemConfigReader';
import LoaderConfigReader from './ReaderExtends/LoaderConfigReader';
import LoadingConfigReader from './ReaderExtends/LoadingConfigReader';
import MailConfigReader from './ReaderExtends/MailConfigReader';
import MapConfigReader from './ReaderExtends/MapConfigReader';
import MenuConfigReader from './ReaderExtends/MenuConfigReader';
import MenuIndexConfigReader from './ReaderExtends/MenuIndexConfigReader';
import MonsterPropConfigReader from './ReaderExtends/MonsterPropConfigReader';
import MsgConfigReader from './ReaderExtends/MsgConfigReader';
import PlayerLevelConfigReader from './ReaderExtends/PlayerLevelConfigReader';
import PlayerNameConfigReader from './ReaderExtends/PlayerNameConfigReader';
import PlayListConfigReader from './ReaderExtends/PlayListConfigReader';
import PlotConfigReader from './ReaderExtends/PlotConfigReader';
import PowerConfigReader from './ReaderExtends/PowerConfigReader';
import PowerGiveConfigReader from './ReaderExtends/PowerGiveConfigReader';
import PropertyConfigReader from './ReaderExtends/PropertyConfigReader';
import PropValueConfigReader from './ReaderExtends/PropValueConfigReader';
import PvpMapConfigReader from './ReaderExtends/PvpMapConfigReader';
import QuestConfigReader from './ReaderExtends/QuestConfigReader';
import RewardConfigReader from './ReaderExtends/RewardConfigReader';
import ShopConfigReader from './ReaderExtends/ShopConfigReader';
import SkillConfigReader from './ReaderExtends/SkillConfigReader';
import SoundConfigReader from './ReaderExtends/SoundConfigReader';
import UnlockConfigReader from './ReaderExtends/UnlockConfigReader';
import WayConfigReader from './ReaderExtends/WayConfigReader';


export class ExcelConfigManager
{
	static pbconfig:excelconfig.ConfigMng;
	aAAShield = new AAAShieldConfigReader('AAAShield', AAAShieldConfig);
	activities = new ActivitiesConfigReader('Activities', ActivitiesConfig);
	avatar = new AvatarConfigReader('Avatar', AvatarConfig);
	bag = new BagConfigReader('Bag', BagConfig);
	battleFormula = new BattleFormulaConfigReader('BattleFormula', BattleFormulaConfig);
	chapter = new ChapterConfigReader('Chapter', ChapterConfig);
	checkPoint = new CheckPointConfigReader('CheckPoint', CheckPointConfig);
	compound = new CompoundConfigReader('Compound', CompoundConfig);
	countActivities = new CountActivitiesConfigReader('CountActivities', CountActivitiesConfig);
	daily = new DailyConfigReader('Daily', DailyConfig);
	draug = new DraugConfigReader('Draug', DraugConfig);
	draugAwaken = new DraugAwakenConfigReader('DraugAwaken', DraugAwakenConfig);
	draugSuit = new DraugSuitConfigReader('DraugSuit', DraugSuitConfig);
	duelDan = new DuelDanConfigReader('DuelDan', DuelDanConfig);
	duelRanking = new DuelRankingConfigReader('DuelRanking', DuelRankingConfig);
	duelSeason = new DuelSeasonConfigReader('DuelSeason', DuelSeasonConfig);
	equipExp = new EquipExpConfigReader('EquipExp', EquipExpConfig);
	equipment = new EquipmentConfigReader('Equipment', EquipmentConfig);
	gashapon = new GashaponConfigReader('Gashapon', GashaponConfig);
	guide = new GuideConfigReader('Guide', GuideConfig);
	headPortrait = new HeadPortraitConfigReader('HeadPortrait', HeadPortraitConfig);
	hero = new HeroConfigReader('Hero', HeroConfig);
	heroExp = new HeroExpConfigReader('HeroExp', HeroExpConfig);
	heroStar = new HeroStarConfigReader('HeroStar', HeroStarConfig);
	heroTag = new HeroTagConfigReader('HeroTag', HeroTagConfig);
	heroTeam = new HeroTeamConfigReader('HeroTeam', HeroTeamConfig);
	heroType = new HeroTypeConfigReader('HeroType', HeroTypeConfig);
	item = new ItemConfigReader('Item', ItemConfig);
	loader = new LoaderConfigReader('Loader', LoaderConfig);
	loading = new LoadingConfigReader('Loading', LoadingConfig);
	mail = new MailConfigReader('Mail', MailConfig);
	map = new MapConfigReader('Map', MapConfig);
	menu = new MenuConfigReader('Menu', MenuConfig);
	menuIndex = new MenuIndexConfigReader('MenuIndex', MenuIndexConfig);
	monsterProp = new MonsterPropConfigReader('MonsterProp', MonsterPropConfig);
	msg = new MsgConfigReader('Msg', MsgConfig);
	playerLevel = new PlayerLevelConfigReader('PlayerLevel', PlayerLevelConfig);
	playerName = new PlayerNameConfigReader('PlayerName', PlayerNameConfig);
	playList = new PlayListConfigReader('PlayList', PlayListConfig);
	plot = new PlotConfigReader('Plot', PlotConfig);
	power = new PowerConfigReader('Power', PowerConfig);
	powerGive = new PowerGiveConfigReader('PowerGive', PowerGiveConfig);
	property = new PropertyConfigReader('Property', PropertyConfig);
	propValue = new PropValueConfigReader('PropValue', PropValueConfig);
	pvpMap = new PvpMapConfigReader('PvpMap', PvpMapConfig);
	quest = new QuestConfigReader('Quest', QuestConfig);
	reward = new RewardConfigReader('Reward', RewardConfig);
	shop = new ShopConfigReader('Shop', ShopConfig);
	skill = new SkillConfigReader('Skill', SkillConfig);
	sound = new SoundConfigReader('Sound', SoundConfig);
	unlock = new UnlockConfigReader('Unlock', UnlockConfig);
	way = new WayConfigReader('Way', WayConfig);

	static Init()
	{
		excelconfig.AAAShield = AAAShieldConfig;
		excelconfig.Activities = ActivitiesConfig;
		excelconfig.Avatar = AvatarConfig;
		excelconfig.Bag = BagConfig;
		excelconfig.BattleFormula = BattleFormulaConfig;
		excelconfig.Chapter = ChapterConfig;
		excelconfig.CheckPoint = CheckPointConfig;
		excelconfig.Compound = CompoundConfig;
		excelconfig.CountActivities = CountActivitiesConfig;
		excelconfig.Daily = DailyConfig;
		excelconfig.Draug = DraugConfig;
		excelconfig.DraugAwaken = DraugAwakenConfig;
		excelconfig.DraugSuit = DraugSuitConfig;
		excelconfig.DuelDan = DuelDanConfig;
		excelconfig.DuelRanking = DuelRankingConfig;
		excelconfig.DuelSeason = DuelSeasonConfig;
		excelconfig.EquipExp = EquipExpConfig;
		excelconfig.Equipment = EquipmentConfig;
		excelconfig.Gashapon = GashaponConfig;
		excelconfig.Guide = GuideConfig;
		excelconfig.HeadPortrait = HeadPortraitConfig;
		excelconfig.Hero = HeroConfig;
		excelconfig.HeroExp = HeroExpConfig;
		excelconfig.HeroStar = HeroStarConfig;
		excelconfig.HeroTag = HeroTagConfig;
		excelconfig.HeroTeam = HeroTeamConfig;
		excelconfig.HeroType = HeroTypeConfig;
		excelconfig.Item = ItemConfig;
		excelconfig.Loader = LoaderConfig;
		excelconfig.Loading = LoadingConfig;
		excelconfig.Mail = MailConfig;
		excelconfig.Map = MapConfig;
		excelconfig.Menu = MenuConfig;
		excelconfig.MenuIndex = MenuIndexConfig;
		excelconfig.MonsterProp = MonsterPropConfig;
		excelconfig.Msg = MsgConfig;
		excelconfig.PlayerLevel = PlayerLevelConfig;
		excelconfig.PlayerName = PlayerNameConfig;
		excelconfig.PlayList = PlayListConfig;
		excelconfig.Plot = PlotConfig;
		excelconfig.Power = PowerConfig;
		excelconfig.PowerGive = PowerGiveConfig;
		excelconfig.Property = PropertyConfig;
		excelconfig.PropValue = PropValueConfig;
		excelconfig.PvpMap = PvpMapConfig;
		excelconfig.Quest = QuestConfig;
		excelconfig.Reward = RewardConfig;
		excelconfig.Shop = ShopConfig;
		excelconfig.Skill = SkillConfig;
		excelconfig.Sound = SoundConfig;
		excelconfig.Unlock = UnlockConfig;
		excelconfig.Way = WayConfig;

	}
}
