/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import QualityItemButton from "../../Extends/ModuleDraug/QualityItemButton";

export default class QualityItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Type : fgui.Controller;

	
	public static URL:string = "ui://hc5dpgynl9j12z";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():QualityItemButton {
		return <QualityItemButton><any>(fgui.UIPackage.createObject("ModuleDraug","QualityItemButton"));
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