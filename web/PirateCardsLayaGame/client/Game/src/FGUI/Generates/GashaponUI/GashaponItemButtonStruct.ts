/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponItemButton from "../../Extends/GashaponUI/GashaponItemButton";

export default class GashaponItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmhwigb";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponItemButton {
		return <GashaponItemButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponItemButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}