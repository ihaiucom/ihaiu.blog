/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PVEHallWindowUI from "../../Extends/ModulePVEHall/PVEHallWindowUI";
import PVEHallListItem from "../../Extends/ModulePVEHall/PVEHallListItem";

export default class ModulePVEHallBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PVEHallWindowUI.URL, PVEHallWindowUI);
		bind(PVEHallListItem.URL, PVEHallListItem);
	}
}