/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PVPHallWindowUI from "../../Extends/ModulePVPHall/PVPHallWindowUI";
import PVPHallListItem from "../../Extends/ModulePVPHall/PVPHallListItem";

export default class ModulePVPHallBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PVPHallWindowUI.URL, PVPHallWindowUI);
		bind(PVPHallListItem.URL, PVPHallListItem);
	}
}