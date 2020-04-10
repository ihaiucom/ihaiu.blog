import Game from '../Game';


export class AAAShieldConfigLang extends excelconfigSources.AAAShield
{

}

export class ActivitiesConfigLang extends excelconfigSources.Activities
{

}

export class AffixConfigLang extends excelconfigSources.Affix
{

}

export class AvatarConfigLang extends excelconfigSources.Avatar
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Avatar', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get icon():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnIcon

		let value = <string> Game.lang.getValue('Avatar', this.id, 'zhCnIcon');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnIcon
	}

	get iconDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnIcondes

		let value = <string> Game.lang.getValue('Avatar', this.id, 'zhCnIcondes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnIcondes
	}

}

export class BagConfigLang extends excelconfigSources.Bag
{

}

export class BattleFormulaConfigLang extends excelconfigSources.BattleFormula
{

}

export class ChapterConfigLang extends excelconfigSources.Chapter
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Chapter', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class CheckPointConfigLang extends excelconfigSources.CheckPoint
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('CheckPoint', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get describe():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDescribe

		let value = <string> Game.lang.getValue('CheckPoint', this.id, 'zhCnDescribe');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDescribe
	}

}

export class CompoundConfigLang extends excelconfigSources.Compound
{

}

export class CountActivitiesConfigLang extends excelconfigSources.CountActivities
{

}

export class DailyConfigLang extends excelconfigSources.Daily
{

}

export class DraugConfigLang extends excelconfigSources.Draug
{

}

export class DraugAwakenConfigLang extends excelconfigSources.DraugAwaken
{

}

export class DraugSuitConfigLang extends excelconfigSources.DraugSuit
{

}

export class DuelDanConfigLang extends excelconfigSources.DuelDan
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('DuelDan', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('DuelDan', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class DuelPointConfigLang extends excelconfigSources.DuelPoint
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('DuelPoint', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class DuelRankingConfigLang extends excelconfigSources.DuelRanking
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('DuelRanking', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class DuelSeasonConfigLang extends excelconfigSources.DuelSeason
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('DuelSeason', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class EquipExpConfigLang extends excelconfigSources.EquipExp
{

}

export class EquipmentConfigLang extends excelconfigSources.Equipment
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Equipment', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Equipment', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class GashaponConfigLang extends excelconfigSources.Gashapon
{

}

export class GashaponNewConfigLang extends excelconfigSources.GashaponNew
{

}

export class GuideConfigLang extends excelconfigSources.Guide
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Guide', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Guide', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class HeadPortraitConfigLang extends excelconfigSources.HeadPortrait
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('HeadPortrait', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class HeroConfigLang extends excelconfigSources.Hero
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Hero', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class HeroExpConfigLang extends excelconfigSources.HeroExp
{

}

export class HeroStarConfigLang extends excelconfigSources.HeroStar
{

}

export class HeroTagConfigLang extends excelconfigSources.HeroTag
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('HeroTag', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class HeroTeamConfigLang extends excelconfigSources.HeroTeam
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('HeroTeam', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('HeroTeam', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class HeroTypeConfigLang extends excelconfigSources.HeroType
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('HeroType', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class ItemConfigLang extends excelconfigSources.Item
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get itemDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnItemdes

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnItemdes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnItemdes
	}

}

export class LoaderConfigLang extends excelconfigSources.Loader
{

}

export class LoadingConfigLang extends excelconfigSources.Loading
{

}

export class MailConfigLang extends excelconfigSources.Mail
{

	get title():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnTitle

		let value = <string> Game.lang.getValue('Mail', this.id, 'zhCnTitle');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnTitle
	}

	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnContent

		let value = <string> Game.lang.getValue('Mail', this.id, 'zhCnContent');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnContent
	}

}

export class MapConfigLang extends excelconfigSources.Map
{

}

export class MenuConfigLang extends excelconfigSources.Menu
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Menu', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class MenuIndexConfigLang extends excelconfigSources.MenuIndex
{

}

export class MonsterDynamicConfigLang extends excelconfigSources.MonsterDynamic
{

}

export class MonsterPropConfigLang extends excelconfigSources.MonsterProp
{

}

export class MsgConfigLang extends excelconfigSources.Msg
{

	get notice():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnNotice

		let value = <string> Game.lang.getValue('Msg', this.id, 'zhCnNotice');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnNotice
	}

}

export class NoticeConfigLang extends excelconfigSources.Notice
{

	get Des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Notice', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class PlayerLevelConfigLang extends excelconfigSources.PlayerLevel
{

}

export class PlayerNameConfigLang extends excelconfigSources.PlayerName
{

	get name1():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName1

		let value = <string> Game.lang.getValue('PlayerName', this.id, 'zhCnName1');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName1
	}

	get name2():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName2

		let value = <string> Game.lang.getValue('PlayerName', this.id, 'zhCnName2');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName2
	}

	get name3():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName3

		let value = <string> Game.lang.getValue('PlayerName', this.id, 'zhCnName3');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName3
	}

}

export class PlayListConfigLang extends excelconfigSources.PlayList
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('PlayList', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('PlayList', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class PlotConfigLang extends excelconfigSources.Plot
{

	get scenename():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnScenename

		let value = <string> Game.lang.getValue('Plot', this.id, 'zhCnScenename');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnScenename
	}

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Plot', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get word():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnWord

		let value = <string> Game.lang.getValue('Plot', this.id, 'zhCnWord');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnWord
	}

}

export class PowerConfigLang extends excelconfigSources.Power
{

}

export class PowerGiveConfigLang extends excelconfigSources.PowerGive
{

}

export class PropertyConfigLang extends excelconfigSources.Property
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Property', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class PropValueConfigLang extends excelconfigSources.PropValue
{

}

export class PvpMapConfigLang extends excelconfigSources.PvpMap
{

}

export class QuestConfigLang extends excelconfigSources.Quest
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Quest', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get Des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Quest', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class ResCostConfigLang extends excelconfigSources.ResCost
{

}

export class RewardConfigLang extends excelconfigSources.Reward
{

}

export class SecretLandConfigLang extends excelconfigSources.SecretLand
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('SecretLand', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class SecretLandMonsterConfigLang extends excelconfigSources.SecretLandMonster
{

}

export class SetHeroPropConfigLang extends excelconfigSources.SetHeroProp
{

}

export class ShopConfigLang extends excelconfigSources.Shop
{

}

export class SkillConfigLang extends excelconfigSources.Skill
{

	get Name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get Desc():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDesc

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnDesc');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDesc
	}

	get Updesc1():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc1

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc1');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc1
	}

	get Updesc2():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc2

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc2');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc2
	}

	get Updesc3():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc3

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc3');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc3
	}

	get Updesc4():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc4

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc4');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc4
	}

	get Updesc5():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc5

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc5');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc5
	}

	get Updesc6():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnUpdesc6

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnUpdesc6');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnUpdesc6
	}

	get tips():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnTips

		let value = <string> Game.lang.getValue('Skill', this.id, 'zhCnTips');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnTips
	}

}

export class SoundConfigLang extends excelconfigSources.Sound
{

}

export class UnlockConfigLang extends excelconfigSources.Unlock
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Unlock', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class WayConfigLang extends excelconfigSources.Way
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Way', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Way', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}