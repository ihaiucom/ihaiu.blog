import MenuValidate from "./MenuValidate";
import { MenuId } from "./MenuId";
import Game from "../Game";
import WindowRed from "../FGUI/Extends/CommonGame/WindowRed";
import { MenuIndexId } from "./MenuIndexId";
import { HeroState } from "./DataEnums/HeroType";
import { HeroData } from "./DataStructs/HeroData";
import { EquipData } from "./DataStructs/EquipData";
import { SkillData } from "./DataStructs/SkillData";
import { EnumSkillState } from "../GameWar/Logic/Enum/EnumSkill";
import SectionType = proto.CheckPointType
import QuestType = proto.QuestType;
import GashaponType = proto.GashaponType;
import ChapterData, { EnumChapterRewardState } from "./DataStructs/ChapterData";
import DailyConfig from "../Config/ConfigExtends/DailyConfig";
import DraugData from "./DataStructs/DraugData";

//=========================
// 验证红点
//-------------------------
export default class MenuValidateRed extends MenuValidate
{
	install()
	{
		// this.add(MenuId.Manage, this.getManageRed);
		// this.add(MenuId.Run, this.getRunRed);
	}


	// //管理
	// getManageRed(): boolean
	// {
	// 	return Game.moduleModel.story.isRed;
	// }

	// //经营
	// getRunRed(): boolean
	// {
	// 	return Game.moduleModel.order.redNum > 0 || Game.moduleModelmoduleModel.visit.isRed || Game.moduleModel.meeting.isRed || Game.moduleModel.business.isRed || Game.moduleModel.business.isRed;
	// }


	validate(menuId: MenuId): boolean | number
	{
		if (Game.config.unlock.hasConfig(menuId) && !Game.moduleModel.home.IsOpen(menuId))
		{
			return false;
		}

		// 一级HOME
		switch (menuId)
		{
			/*---------方位下 2------ */
			// 招募
			case MenuId.Gashapon:
				return Game.moduleModel.gashapon.IsCanFreeGashapon();

			// 英雄
			case MenuId.Hero:
				return Game.moduleModel.hero.IsCanGetHero() || Game.moduleModel.hero.IsCanLevelSkillWearStarHero();

			// 背包
			case MenuId.Bag:
				return Game.moduleModel.bag.IsNewGetItem();

			// 装备
			case MenuId.Equip:
				return Game.moduleModel.equip.IsCanStrenghenEquip() || Game.moduleModel.equip.IsCanStarEquip();

			// 战魂
			case MenuId.Draug:
				return Game.moduleModel.draug.IsCanWearHero();

			// 征战
			case MenuId.Sections:
				return Game.moduleModel.section.IsCanGetStoryReWards() //|| Game.moduleModel.section.IsCanGetEliteReWards();
			
			/*---------方位左下 3------ */
			// 任务
			case MenuId.Quest:
				return Game.moduleModel.quest.IsCanGetGrowUp() || Game.moduleModel.quest.IsCanGetDaily() || Game.moduleModel.quest.IsCanGetDailyActive();

			// 备战
			case MenuId.BattlePlan:
				return;

			/*---------方位上 5------ */
			// 设置
			case MenuId.SystemSetting:
				return;

			// 邮件
			case MenuId.Mail:
				return;

			// 排行榜
			case MenuId.Rank:
				return;
			
			// 角色信息
			case MenuId.PlayerInfo:
				return Game.user.IsNewGetAvatar();

			/*---------方位左上 6------ */
			// 福利(明日可取)
			case MenuId.Welfare:
				return;

			/*---------方位右上 7------ */
			// 体力
			case MenuId.Power:
				return;

			// 金币
			case MenuId.Money:
				return;
		}

		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}
		return false;
	}

	validateTab(menuIndexId: MenuIndexId, data:any): boolean | number
	{
		if (Game.config.unlock.hasConfig(menuIndexId) && !Game.moduleModel.home.IsOpen(menuIndexId))
		{
			return false;
		}

		// 二级Tab
		switch (menuIndexId)
		{
			case MenuIndexId.GashaponGeneral:
				return Game.moduleModel.gashapon.IsFreeGashaponByType(GashaponType.GeneralGashapon);

			case MenuIndexId.GashaponAdvanced:
				return Game.moduleModel.gashapon.IsFreeGashaponByType(GashaponType.AdvancedGashapon);

			case MenuIndexId.HeroBase:
				return (data.state == HeroState.Got) && Game.moduleModel.hero.IsCanLevelHero(data.id);

			case MenuIndexId.HeroSkill:
				return (data.state == HeroState.Got) && Game.moduleModel.hero.IsCanUpSkillHero(data.id);
			
			case MenuIndexId.HeroEquip:
				return (data.state == HeroState.Got) && Game.moduleModel.hero.IsCanWearPosHero(data.id);

			case MenuIndexId.HeroStar:
				return (data.state == HeroState.Got) && Game.moduleModel.hero.IsCanStarHero(data.id);

			case MenuIndexId.BagNormal:
				return Game.moduleModel.bag.IsNewNormalItem();

			case MenuIndexId.BagPieces:
				return Game.moduleModel.bag.IsNewPiecesItem();

			case MenuIndexId.BagPieces:
				return Game.moduleModel.bag.IsNewEquipItem();

			case MenuIndexId.EquipStrenghen:
				return Game.moduleModel.equip.IsStrenghenEquip(data.uid);

			case MenuIndexId.EquipStar:
				return Game.moduleModel.equip.IsStarEquip(data.uid);

			case MenuIndexId.DraugAwaken:
				return;

			case MenuIndexId.DraugWeared:
				return Game.moduleModel.draug.IsCanWearHero();

			case MenuIndexId.DraugDecompose:
				return;

			case MenuIndexId.SectionStory:
				return Game.moduleModel.section.IsCanGetStoryReWards();

			case MenuIndexId.SectionElite:
				return //Game.moduleModel.section.IsCanGetEliteReWards();

			case MenuIndexId.QuestGrowUp:
				return Game.moduleModel.quest.IsCanGetGrowUp();

			case MenuIndexId.QuestDaily:
				return Game.moduleModel.quest.IsCanGetDaily() || Game.moduleModel.quest.IsCanGetDailyActive();

			case MenuIndexId.PlayerInfo:
				return Game.user.IsNewGetAvatar();

			case MenuIndexId.PlayerTeam:
				return;

		}

		return false;
	}

	validateItem(menuId: MenuId, data:any): boolean | number
	{
		// 一级HOME
		switch (menuId)
		{
			/*---------方位下 2------ */
			// 招募
			case MenuId.Gashapon:
				return;

			// 英雄
			case MenuId.Hero:
				let get, pos, can, wear, up;

				if (data instanceof HeroData && data.state == HeroState.CanGet) 
				{
					get  = true;
				}

				if (data instanceof HeroData && data.state == HeroState.Got) 
				{
					pos  = this.validateTab(MenuIndexId.HeroBase, data) || this.validateTab(MenuIndexId.HeroEquip, data) || this.validateTab(MenuIndexId.HeroSkill, data) || this.validateTab(MenuIndexId.HeroStar, data);
				}

				if (data instanceof EquipData && data.onWho > 0) 
				{
					can  = Game.moduleModel.equip.IsCanWearEquip(data.onWho, data.pos, data.id ? data : null);
				}

				if (data instanceof EquipData && data.onWho < 0) 
				{
					let waerdata = Game.moduleModel.hero.GetPosEquip(-data.onWho, data.pos);
					wear = Game.moduleModel.equip.IsWearEquip(data, waerdata);
				}

				if (data instanceof SkillData && data.state == EnumSkillState.CanLv) 
				{
					up   = Game.moduleModel.hero.IsCanUpSkill(data.heroID, data.id);
				}

				return  get || pos || can || wear || up;

			// 背包
			case MenuId.Bag:
				return Game.moduleModel.bag.IsNewItem(data.uid);

			// 装备
			case MenuId.Equip:
				return this.validateTab(MenuIndexId.EquipStrenghen, data) || this.validateTab(MenuIndexId.EquipStar, data);

			// 战魂
			case MenuId.Draug:
				if (data instanceof DraugData) 
				{
					let weardraug = Game.moduleModel.hero.GetPosDraug(data.heroId, data.pos);
					data.heroId = -1;
					return data.uid ? Game.moduleModel.draug.IsWearDraug(data, weardraug) : Game.moduleModel.draug.IsCanWearDraug(data.heroId, data.pos, weardraug);
				}

				if (data instanceof HeroData) 
				{
					return this.validateTab(MenuIndexId.DraugWeared, data)
				}

				return false;

			// 征战
			case MenuId.Sections:
				
				let chapter = data.data;
				if (!chapter) 
				{
					return Game.moduleModel.section.IsCanGetReward(data)
				}


				if (chapter.type == SectionType.Story) 
				{
					return Game.moduleModel.section.IsCanGetStoryReWardsLR(chapter, data.dir);
				}
				if (chapter.type == SectionType.Elite) 
				{
					return //Game.moduleModel.section.IsCanGetEliteReWardsLR(chapter, data.dir)
				}

				return false;
			
			/*---------方位左下 3------ */
			// 任务
			case MenuId.Quest:
				if (data instanceof DailyConfig) 
				{
					return Game.moduleModel.quest.IsGetDailyActive(data);
				}

				if (data.type == QuestType.GrowQuest) 
				{
					return Game.moduleModel.quest.IsGetGrowUp(data);
				}
				if (data.type == QuestType.DailyQuest) 
				{
					return Game.moduleModel.quest.IsGetDaily(data)
				}
				
				return false;
			// 备战
			case MenuId.BattlePlan:
				return;

			/*---------方位上 5------ */
			// 设置
			case MenuId.SystemSetting:
				return;

			// 邮件
			case MenuId.Mail:
				return;

			// 排行榜
			case MenuId.Rank:
				return;
			
			// 角色信息
			case MenuId.PlayerInfo:
				return Game.user.IsNewAvatar(data.id);

			/*---------方位左上 6------ */
			// 福利(明日可取)
			case MenuId.Welfare:
				return;

			/*---------方位右上 7------ */
			// 体力
			case MenuId.Power:
				return;

			// 金币
			case MenuId.Money:
				return;
		}

		// if (this.dict.hasKey(menuId))
		// {
		// 	return this.dict.getValue(menuId).apply(this);
		// }
		return false;
	}

	createRed(parent: GComponent)
	{
		let red = <WindowRed>parent.getChildById("red");
		if (!red) 
		{
			red = WindowRed.poolGet();
			red.autoSize(parent);		
			parent.addChild(red);
		}

		return red;
	}

	removeRed(parent: GComponent)
	{
		let red = <WindowRed>parent.getChildById("red");
		if (red) 
		{
			red.release();
		}
	}

	/** 验证系统 */
	openMenu(menuId: MenuId, parent: GComponent)
	{
		if (this.validate(menuId)) 
		{
			let red = this.createRed(parent);

			let config = Game.config.menu.getConfig(menuId);
			red.m_Type.selectedIndex = config.redType;
		}
		else
		{
			this.removeRed(parent);
		}
	}

	/** 验证页签 */
	openTab(menuIndexId: MenuIndexId, data:any, parent: GComponent)
	{
		if (this.validateTab(menuIndexId, data)) 
		{
			let red = this.createRed(parent);

			let config = Game.config.menuIndex.getConfigByMenuIndexId(menuIndexId);
			if (config) red.m_Type.selectedIndex = config.redType;
		}
		else
		{
			this.removeRed(parent);
		}
	}

	/** 验证物品 */
	openItem(menuId: MenuId, data:any, parent?: GComponent)
	{
		if (this.validateItem(menuId, data)) 
		{
			let red = this.createRed(parent);
			red.m_Type.selectedIndex = 0;
		}
		else
		{
			this.removeRed(parent);
		}
	}

	/** 关闭红点 */
	closeRed(parent: GComponent)
	{
		this.removeRed(parent);
	}

	/** 自定义红点 */
	customRed(type:number, parent: GComponent)
	{
		let red = WindowRed.poolGet();
		red.autoSize(parent);
		parent.addChild(red);
		red.m_Type.selectedIndex = type;
	}

}
