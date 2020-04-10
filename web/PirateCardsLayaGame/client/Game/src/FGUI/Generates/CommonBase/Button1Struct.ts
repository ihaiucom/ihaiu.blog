/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Button1 from "../../Extends/CommonBase/Button1";

export default class Button1Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicsdar16";
	
	public static DependPackages:string[] = ["CommonBase","ModuleHero"];

	
	public static createInstance():Button1 {
		return <Button1><any>(fgui.UIPackage.createObject("CommonBase","Button1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}