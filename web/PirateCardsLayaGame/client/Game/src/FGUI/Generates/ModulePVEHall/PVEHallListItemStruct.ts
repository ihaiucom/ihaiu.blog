/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVEHallListItem from "../../Extends/ModulePVEHall/PVEHallListItem";

export default class PVEHallListItemStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://6bls2ftvj4ro1";
	
	public static DependPackages:string[] = ["ModulePVEHall"];

	
	public static createInstance():PVEHallListItem {
		return <PVEHallListItem><any>(fgui.UIPackage.createObject("ModulePVEHall","PVEHallListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}