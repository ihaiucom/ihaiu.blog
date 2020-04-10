/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroPageButton from "../../Extends/ModuleHero/HeroPageButton";

export default class HeroPageButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_line : fgui.GImage;
	public m_title : fgui.GTextField;
	public m_typeIconBg : fgui.GLoader;
	public m_typeIcon : fgui.GLoader;

	
	public static URL:string = "ui://lxpvy4fwlnnh57";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroPageButton {
		return <HeroPageButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroPageButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_line = <fgui.GImage><any>(this.getChild("line"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_typeIconBg = <fgui.GLoader><any>(this.getChild("typeIconBg"));
		this.m_typeIcon = <fgui.GLoader><any>(this.getChild("typeIcon"));
		
		
	}
}