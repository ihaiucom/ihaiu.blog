/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import EquipWindowUI from "../../Extends/ModuleEquip/EquipWindowUI";
import EquipBaseView from "../../Extends/ModuleEquip/EquipBaseView";
import EquipStrengthenView from "../../Extends/ModuleEquip/EquipStrengthenView";
import EquipStrengthenOption from "../../Extends/ModuleEquip/EquipStrengthenOption";
import EquipQuailtySelectList from "../../Extends/ModuleEquip/EquipQuailtySelectList";
import EquipQulitySelectItem from "../../Extends/ModuleEquip/EquipQulitySelectItem";
import EquipQualitySelectBtn from "../../Extends/ModuleEquip/EquipQualitySelectBtn";
import EquipStarView from "../../Extends/ModuleEquip/EquipStarView";
import EquipListView from "../../Extends/ModuleEquip/EquipListView";
import EquipListSelectView from "../../Extends/ModuleEquip/EquipListSelectView";
import EquipSelectView from "../../Extends/ModuleEquip/EquipSelectView";
import EquipDetialView from "../../Extends/ModuleEquip/EquipDetialView";
import EquipTypeButtonList from "../../Extends/ModuleEquip/EquipTypeButtonList";
import EquipNoInfoView from "../../Extends/ModuleEquip/EquipNoInfoView";
import EquipLevelUpDialog from "../../Extends/ModuleEquip/EquipLevelUpDialog";
import EquipStarUpDialog from "../../Extends/ModuleEquip/EquipStarUpDialog";
import EquipStarUpItem from "../../Extends/ModuleEquip/EquipStarUpItem";
import EquipSelectDialog from "../../Extends/ModuleEquip/EquipSelectDialog";
import EquipItemButton from "../../Extends/ModuleEquip/EquipItemButton";
import EquipProButton from "../../Extends/ModuleEquip/EquipProButton";
import EquipFuncButton from "../../Extends/ModuleEquip/EquipFuncButton";
import EquipIconButton from "../../Extends/ModuleEquip/EquipIconButton";
import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import EquipIconItemButton from "../../Extends/ModuleEquip/EquipIconItemButton";
import EquipStarSelectButton from "../../Extends/ModuleEquip/EquipStarSelectButton";
import EquipIconButtonSmall from "../../Extends/ModuleEquip/EquipIconButtonSmall";
import EquipTypeButton from "../../Extends/ModuleEquip/EquipTypeButton";
import EquipSelectQuality from "../../Extends/ModuleEquip/EquipSelectQuality";
import EquipTopButton from "../../Extends/ModuleEquip/EquipTopButton";
import EquipIconItemButtonSmall from "../../Extends/ModuleEquip/EquipIconItemButtonSmall";
import EquipSelectItem from "../../Extends/ModuleEquip/EquipSelectItem";
import EquipPageLabel from "../../Extends/ModuleEquip/EquipPageLabel";
import EquipPageButton from "../../Extends/ModuleEquip/EquipPageButton";
import EquipHeroTypeList from "../../Extends/ModuleEquip/EquipHeroTypeList";
import EquipHeroTypeIcon from "../../Extends/ModuleEquip/EquipHeroTypeIcon";
import EquipDialogListView from "../../Extends/ModuleEquip/EquipDialogListView";

export default class ModuleEquipBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(EquipWindowUI.URL, EquipWindowUI);
		bind(EquipBaseView.URL, EquipBaseView);
		bind(EquipStrengthenView.URL, EquipStrengthenView);
		bind(EquipStrengthenOption.URL, EquipStrengthenOption);
		bind(EquipQuailtySelectList.URL, EquipQuailtySelectList);
		bind(EquipQulitySelectItem.URL, EquipQulitySelectItem);
		bind(EquipQualitySelectBtn.URL, EquipQualitySelectBtn);
		bind(EquipStarView.URL, EquipStarView);
		bind(EquipListView.URL, EquipListView);
		bind(EquipListSelectView.URL, EquipListSelectView);
		bind(EquipSelectView.URL, EquipSelectView);
		bind(EquipDetialView.URL, EquipDetialView);
		bind(EquipTypeButtonList.URL, EquipTypeButtonList);
		bind(EquipNoInfoView.URL, EquipNoInfoView);
		bind(EquipLevelUpDialog.URL, EquipLevelUpDialog);
		bind(EquipStarUpDialog.URL, EquipStarUpDialog);
		bind(EquipStarUpItem.URL, EquipStarUpItem);
		bind(EquipSelectDialog.URL, EquipSelectDialog);
		bind(EquipItemButton.URL, EquipItemButton);
		bind(EquipProButton.URL, EquipProButton);
		bind(EquipFuncButton.URL, EquipFuncButton);
		bind(EquipIconButton.URL, EquipIconButton);
		bind(EquipStarPos.URL, EquipStarPos);
		bind(EquipIconItemButton.URL, EquipIconItemButton);
		bind(EquipStarSelectButton.URL, EquipStarSelectButton);
		bind(EquipIconButtonSmall.URL, EquipIconButtonSmall);
		bind(EquipTypeButton.URL, EquipTypeButton);
		bind(EquipSelectQuality.URL, EquipSelectQuality);
		bind(EquipTopButton.URL, EquipTopButton);
		bind(EquipIconItemButtonSmall.URL, EquipIconItemButtonSmall);
		bind(EquipSelectItem.URL, EquipSelectItem);
		bind(EquipPageLabel.URL, EquipPageLabel);
		bind(EquipPageButton.URL, EquipPageButton);
		bind(EquipHeroTypeList.URL, EquipHeroTypeList);
		bind(EquipHeroTypeIcon.URL, EquipHeroTypeIcon);
		bind(EquipDialogListView.URL, EquipDialogListView);
	}
}