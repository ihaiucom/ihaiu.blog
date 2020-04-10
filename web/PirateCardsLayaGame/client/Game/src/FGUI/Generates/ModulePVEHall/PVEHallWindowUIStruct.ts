/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead2 from "../../Extends/CommonGame/WindowHead2";
import PVEHallWindowUI from "../../Extends/ModulePVEHall/PVEHallWindowUI";

export default class PVEHallWindowUIStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_head : WindowHead2;

	
	public static URL:string = "ui://6bls2ftvj4ro0";
	
	public static DependPackages:string[] = ["ModulePVEHall","CommonGame","CommonBase","ModuleSecretLand"];

	
	public static createInstance():PVEHallWindowUI {
		return <PVEHallWindowUI><any>(fgui.UIPackage.createObject("ModulePVEHall","PVEHallWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_head = <WindowHead2><any>(this.getChild("head"));
		
		
	}
}