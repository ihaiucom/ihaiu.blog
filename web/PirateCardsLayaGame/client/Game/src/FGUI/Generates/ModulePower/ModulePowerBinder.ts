/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PowerWindowUI from "../../Extends/ModulePower/PowerWindowUI";
import PowerView from "../../Extends/ModulePower/PowerView";
import BuyItem from "../../Extends/ModulePower/BuyItem";
import UseItem from "../../Extends/ModulePower/UseItem";

export default class ModulePowerBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PowerWindowUI.URL, PowerWindowUI);
		bind(PowerView.URL, PowerView);
		bind(BuyItem.URL, BuyItem);
		bind(UseItem.URL, UseItem);
	}
}