/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponTabButton from "../../Extends/GashaponUI/GashaponTabButton";

export default class GashaponTabButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://660ksptmxa2z10";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponTabButton {
		return <GashaponTabButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponTabButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		
		
	}
}