/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PartItemButton from "../../Extends/ModuleDraug/PartItemButton";

export default class PartItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Type : fgui.Controller;

	
	public static URL:string = "ui://hc5dpgynl9j12y";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():PartItemButton {
		return <PartItemButton><any>(fgui.UIPackage.createObject("ModuleDraug","PartItemButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_Type = this.getController("Type");

		
		
		
	}
}