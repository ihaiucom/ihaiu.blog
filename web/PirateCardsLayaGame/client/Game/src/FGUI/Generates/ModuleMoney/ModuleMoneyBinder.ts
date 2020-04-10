/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import MoneyWindowUI from "../../Extends/ModuleMoney/MoneyWindowUI";
import MoneyView from "../../Extends/ModuleMoney/MoneyView";
import MoneyItem from "../../Extends/ModuleMoney/MoneyItem";
import WayItem from "../../Extends/ModuleMoney/WayItem";

export default class ModuleMoneyBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(MoneyWindowUI.URL, MoneyWindowUI);
		bind(MoneyView.URL, MoneyView);
		bind(MoneyItem.URL, MoneyItem);
		bind(WayItem.URL, WayItem);
	}
}