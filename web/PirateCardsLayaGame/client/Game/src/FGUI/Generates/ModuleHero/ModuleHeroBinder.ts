/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import HeroWindowUI from "../../Extends/ModuleHero/HeroWindowUI";
import HeroInfoView from "../../Extends/ModuleHero/HeroInfoView";
import HeroFuncBaseView from "../../Extends/ModuleHero/HeroFuncBaseView";
import HeroTag from "../../Extends/ModuleHero/HeroTag";
import HeroFuncSkillView from "../../Extends/ModuleHero/HeroFuncSkillView";
import HeroSkillItem from "../../Extends/ModuleHero/HeroSkillItem";
import HeroFuncEquipView from "../../Extends/ModuleHero/HeroFuncEquipView";
import HeroEquipItem from "../../Extends/ModuleHero/HeroEquipItem";
import HeroFuncStarView from "../../Extends/ModuleHero/HeroFuncStarView";
import HeroStarLeft from "../../Extends/ModuleHero/HeroStarLeft";
import HeroListView from "../../Extends/ModuleHero/HeroListView";
import HeroLevelUpDialog from "../../Extends/ModuleHero/HeroLevelUpDialog";
import HeroUseItem from "../../Extends/ModuleHero/HeroUseItem";
import HeroBattleBtnView from "../../Extends/ModuleHero/HeroBattleBtnView";
import HeroPageLabel from "../../Extends/ModuleHero/HeroPageLabel";
import HeroPageButton from "../../Extends/ModuleHero/HeroPageButton";
import HeroItemButton from "../../Extends/ModuleHero/HeroItemButton";
import HeroIconButton from "../../Extends/ModuleHero/HeroIconButton";
import HeroDetialView from "../../Extends/ModuleHero/HeroDetialView";
import HeroProButton from "../../Extends/ModuleHero/HeroProButton";
import HeroStarProButton from "../../Extends/ModuleHero/HeroStarProButton";
import HeroIconItemButton from "../../Extends/ModuleHero/HeroIconItemButton";
import HeroSkillTipsDialog from "../../Extends/ModuleHero/HeroSkillTipsDialog";
import HeroSkillIconButton from "../../Extends/ModuleHero/HeroSkillIconButton";
import HeroSkillLevelUpDialog from "../../Extends/ModuleHero/HeroSkillLevelUpDialog";
import HeroUseItemButton from "../../Extends/ModuleHero/HeroUseItemButton";

export default class ModuleHeroBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(HeroWindowUI.URL, HeroWindowUI);
		bind(HeroInfoView.URL, HeroInfoView);
		bind(HeroFuncBaseView.URL, HeroFuncBaseView);
		bind(HeroTag.URL, HeroTag);
		bind(HeroFuncSkillView.URL, HeroFuncSkillView);
		bind(HeroSkillItem.URL, HeroSkillItem);
		bind(HeroFuncEquipView.URL, HeroFuncEquipView);
		bind(HeroEquipItem.URL, HeroEquipItem);
		bind(HeroFuncStarView.URL, HeroFuncStarView);
		bind(HeroStarLeft.URL, HeroStarLeft);
		bind(HeroListView.URL, HeroListView);
		bind(HeroLevelUpDialog.URL, HeroLevelUpDialog);
		bind(HeroUseItem.URL, HeroUseItem);
		bind(HeroBattleBtnView.URL, HeroBattleBtnView);
		bind(HeroPageLabel.URL, HeroPageLabel);
		bind(HeroPageButton.URL, HeroPageButton);
		bind(HeroItemButton.URL, HeroItemButton);
		bind(HeroIconButton.URL, HeroIconButton);
		bind(HeroDetialView.URL, HeroDetialView);
		bind(HeroProButton.URL, HeroProButton);
		bind(HeroStarProButton.URL, HeroStarProButton);
		bind(HeroIconItemButton.URL, HeroIconItemButton);
		bind(HeroSkillTipsDialog.URL, HeroSkillTipsDialog);
		bind(HeroSkillIconButton.URL, HeroSkillIconButton);
		bind(HeroSkillLevelUpDialog.URL, HeroSkillLevelUpDialog);
		bind(HeroUseItemButton.URL, HeroUseItemButton);
	}
}