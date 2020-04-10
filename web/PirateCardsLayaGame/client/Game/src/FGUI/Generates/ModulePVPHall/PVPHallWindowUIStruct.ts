/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead3 from "../../Extends/CommonGame/WindowHead3";
import PVPHallWindowUI from "../../Extends/ModulePVPHall/PVPHallWindowUI";

export default class PVPHallWindowUIStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_head : WindowHead3;

	
	public static URL:string = "ui://rbzd77jztmrl0";
	
	public static DependPackages:string[] = ["ModulePVPHall","CommonGame","CommonBase"];

	
	public static createInstance():PVPHallWindowUI {
		return <PVPHallWindowUI><any>(fgui.UIPackage.createObject("ModulePVPHall","PVPHallWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_head = <WindowHead3><any>(this.getChild("head"));
		
		
	}
}