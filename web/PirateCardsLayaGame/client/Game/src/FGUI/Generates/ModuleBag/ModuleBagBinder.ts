/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import BagWindowUI from "../../Extends/ModuleBag/BagWindowUI";
import BagTab from "../../Extends/ModuleBag/BagTab";
import BagItemInfoView from "../../Extends/ModuleBag/BagItemInfoView";
import BagItemInfoIcon from "../../Extends/ModuleBag/BagItemInfoIcon";
import BagOperateButton from "../../Extends/ModuleBag/BagOperateButton";
import BagComboBox_item from "../../Extends/ModuleBag/BagComboBox_item";
import BagComboBox_popup from "../../Extends/ModuleBag/BagComboBox_popup";
import BagComboBox from "../../Extends/ModuleBag/BagComboBox";
import BagSubWindowUI from "../../Extends/ModuleBag/BagSubWindowUI";
import BagSellPanel from "../../Extends/ModuleBag/BagSellPanel";
import BagNumCount from "../../Extends/ModuleBag/BagNumCount";
import BagUsePanel from "../../Extends/ModuleBag/BagUsePanel";
import BagSplitPanel from "../../Extends/ModuleBag/BagSplitPanel";
import BagEquipInfoView from "../../Extends/ModuleBag/BagEquipInfoView";
import LeftItemBtn from "../../Extends/ModuleBag/LeftItemBtn";
import LeftEquipBtn from "../../Extends/ModuleBag/LeftEquipBtn";
import LeftFragmentBtn from "../../Extends/ModuleBag/LeftFragmentBtn";
import EquipHeroTypeList from "../../Extends/ModuleBag/EquipHeroTypeList";
import PanelBackboard from "../../Extends/ModuleBag/PanelBackboard";
import EquipProButton from "../../Extends/ModuleBag/EquipProButton";
import EquipHeroTypeIcon from "../../Extends/ModuleBag/EquipHeroTypeIcon";

export default class ModuleBagBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(BagWindowUI.URL, BagWindowUI);
		bind(BagTab.URL, BagTab);
		bind(BagItemInfoView.URL, BagItemInfoView);
		bind(BagItemInfoIcon.URL, BagItemInfoIcon);
		bind(BagOperateButton.URL, BagOperateButton);
		bind(BagComboBox_item.URL, BagComboBox_item);
		bind(BagComboBox_popup.URL, BagComboBox_popup);
		bind(BagComboBox.URL, BagComboBox);
		bind(BagSubWindowUI.URL, BagSubWindowUI);
		bind(BagSellPanel.URL, BagSellPanel);
		bind(BagNumCount.URL, BagNumCount);
		bind(BagUsePanel.URL, BagUsePanel);
		bind(BagSplitPanel.URL, BagSplitPanel);
		bind(BagEquipInfoView.URL, BagEquipInfoView);
		bind(LeftItemBtn.URL, LeftItemBtn);
		bind(LeftEquipBtn.URL, LeftEquipBtn);
		bind(LeftFragmentBtn.URL, LeftFragmentBtn);
		bind(EquipHeroTypeList.URL, EquipHeroTypeList);
		bind(PanelBackboard.URL, PanelBackboard);
		bind(EquipProButton.URL, EquipProButton);
		bind(EquipHeroTypeIcon.URL, EquipHeroTypeIcon);
	}
}