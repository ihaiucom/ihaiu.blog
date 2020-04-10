/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import WelfareWindowUI from "../../Extends/ModuleWelfare/WelfareWindowUI";
import WelfarePowerView from "../../Extends/ModuleWelfare/WelfarePowerView";
import GetButton from "../../Extends/ModuleWelfare/GetButton";

export default class ModuleWelfareBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(WelfareWindowUI.URL, WelfareWindowUI);
		bind(WelfarePowerView.URL, WelfarePowerView);
		bind(GetButton.URL, GetButton);
	}
}