/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GrayMask from "../../Extends/SystemModuleGuide/GrayMask";
import GuideWindowUI from "../../Extends/SystemModuleGuide/GuideWindowUI";
import GuideDialogUI from "../../Extends/SystemModuleGuide/GuideDialogUI";
import GuideFinger from "../../Extends/SystemModuleGuide/GuideFinger";
import GuideText from "../../Extends/SystemModuleGuide/GuideText";

export default class SystemModuleGuideBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(GrayMask.URL, GrayMask);
		bind(GuideWindowUI.URL, GuideWindowUI);
		bind(GuideDialogUI.URL, GuideDialogUI);
		bind(GuideFinger.URL, GuideFinger);
		bind(GuideText.URL, GuideText);
	}
}