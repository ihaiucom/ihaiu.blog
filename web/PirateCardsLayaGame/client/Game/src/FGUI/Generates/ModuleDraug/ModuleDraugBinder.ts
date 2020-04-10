/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import DraugWindowUI from "../../Extends/ModuleDraug/DraugWindowUI";
import AwakenView from "../../Extends/ModuleDraug/AwakenView";
import WearView from "../../Extends/ModuleDraug/WearView";
import DraugItem from "../../Extends/ModuleDraug/DraugItem";
import AwakenButton from "../../Extends/ModuleDraug/AwakenButton";
import DraugInfoTips from "../../Extends/ModuleDraug/DraugInfoTips";
import PropItem from "../../Extends/ModuleDraug/PropItem";
import SuitItem from "../../Extends/ModuleDraug/SuitItem";
import TypeComboBox_popup from "../../Extends/ModuleDraug/TypeComboBox_popup";
import TypeComboBox from "../../Extends/ModuleDraug/TypeComboBox";
import DraugTypeItem from "../../Extends/ModuleDraug/DraugTypeItem";
import DraugSwallow from "../../Extends/ModuleDraug/DraugSwallow";
import DecomposeView from "../../Extends/ModuleDraug/DecomposeView";
import DraugDialog from "../../Extends/ModuleDraug/DraugDialog";
import DraugInfoDialog from "../../Extends/ModuleDraug/DraugInfoDialog";
import PartButton from "../../Extends/ModuleDraug/PartButton";
import PartItemButton from "../../Extends/ModuleDraug/PartItemButton";
import QualityItemButton from "../../Extends/ModuleDraug/QualityItemButton";
import DraugHeroItem from "../../Extends/ModuleDraug/DraugHeroItem";
import DraugInfoFunc from "../../Extends/ModuleDraug/DraugInfoFunc";
import AllPropItem from "../../Extends/ModuleDraug/AllPropItem";
import DraugTipsDialog from "../../Extends/ModuleDraug/DraugTipsDialog";
import AwakenProbabilityItem from "../../Extends/ModuleDraug/AwakenProbabilityItem";
import DraugProbabilityItem from "../../Extends/ModuleDraug/DraugProbabilityItem";

export default class ModuleDraugBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(DraugWindowUI.URL, DraugWindowUI);
		bind(AwakenView.URL, AwakenView);
		bind(WearView.URL, WearView);
		bind(DraugItem.URL, DraugItem);
		bind(AwakenButton.URL, AwakenButton);
		bind(DraugInfoTips.URL, DraugInfoTips);
		bind(PropItem.URL, PropItem);
		bind(SuitItem.URL, SuitItem);
		bind(TypeComboBox_popup.URL, TypeComboBox_popup);
		bind(TypeComboBox.URL, TypeComboBox);
		bind(DraugTypeItem.URL, DraugTypeItem);
		bind(DraugSwallow.URL, DraugSwallow);
		bind(DecomposeView.URL, DecomposeView);
		bind(DraugDialog.URL, DraugDialog);
		bind(DraugInfoDialog.URL, DraugInfoDialog);
		bind(PartButton.URL, PartButton);
		bind(PartItemButton.URL, PartItemButton);
		bind(QualityItemButton.URL, QualityItemButton);
		bind(DraugHeroItem.URL, DraugHeroItem);
		bind(DraugInfoFunc.URL, DraugInfoFunc);
		bind(AllPropItem.URL, AllPropItem);
		bind(DraugTipsDialog.URL, DraugTipsDialog);
		bind(AwakenProbabilityItem.URL, AwakenProbabilityItem);
		bind(DraugProbabilityItem.URL, DraugProbabilityItem);
	}
}