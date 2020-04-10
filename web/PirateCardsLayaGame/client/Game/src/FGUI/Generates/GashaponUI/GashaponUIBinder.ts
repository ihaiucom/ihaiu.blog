/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GashaponWindowUI from "../../Extends/GashaponUI/GashaponWindowUI";
import GashaponPreview from "../../Extends/GashaponUI/GashaponPreview";
import GashaponPreviewItem from "../../Extends/GashaponUI/GashaponPreviewItem";
import GashaponGetHeroView from "../../Extends/GashaponUI/GashaponGetHeroView";
import GashaponGetHeroButton from "../../Extends/GashaponUI/GashaponGetHeroButton";
import GashaponGetHeroBackButton from "../../Extends/GashaponUI/GashaponGetHeroBackButton";
import GashaponRewardViewPanel from "../../Extends/GashaponUI/GashaponRewardViewPanel";
import GashaponRewardView from "../../Extends/GashaponUI/GashaponRewardView";
import GashaponItemButton from "../../Extends/GashaponUI/GashaponItemButton";
import Gashapon10Button from "../../Extends/GashaponUI/Gashapon10Button";
import GashaponTabButton from "../../Extends/GashaponUI/GashaponTabButton";
import GashaponPreviewButton from "../../Extends/GashaponUI/GashaponPreviewButton";
import GashaponButton from "../../Extends/GashaponUI/GashaponButton";
import GashaponHeroIconButton from "../../Extends/GashaponUI/GashaponHeroIconButton";
import GashaponBasePropItem from "../../Extends/GashaponUI/GashaponBasePropItem";
import GashaponHeroDetail from "../../Extends/GashaponUI/GashaponHeroDetail";

export default class GashaponUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(GashaponWindowUI.URL, GashaponWindowUI);
		bind(GashaponPreview.URL, GashaponPreview);
		bind(GashaponPreviewItem.URL, GashaponPreviewItem);
		bind(GashaponGetHeroView.URL, GashaponGetHeroView);
		bind(GashaponGetHeroButton.URL, GashaponGetHeroButton);
		bind(GashaponGetHeroBackButton.URL, GashaponGetHeroBackButton);
		bind(GashaponRewardViewPanel.URL, GashaponRewardViewPanel);
		bind(GashaponRewardView.URL, GashaponRewardView);
		bind(GashaponItemButton.URL, GashaponItemButton);
		bind(Gashapon10Button.URL, Gashapon10Button);
		bind(GashaponTabButton.URL, GashaponTabButton);
		bind(GashaponPreviewButton.URL, GashaponPreviewButton);
		bind(GashaponButton.URL, GashaponButton);
		bind(GashaponHeroIconButton.URL, GashaponHeroIconButton);
		bind(GashaponBasePropItem.URL, GashaponBasePropItem);
		bind(GashaponHeroDetail.URL, GashaponHeroDetail);
	}
}