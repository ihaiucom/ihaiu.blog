/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroProButton from "../../Extends/ModuleHero/HeroProButton";

export default class HeroProButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_labelNum : fgui.GTextField;

	
	public static URL:string = "ui://lxpvy4fwvpjn81";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroProButton {
		return <HeroProButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroProButton"));
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
		this.m_labelNum = <fgui.GTextField><any>(this.getChild("labelNum"));
		
		
	}
}