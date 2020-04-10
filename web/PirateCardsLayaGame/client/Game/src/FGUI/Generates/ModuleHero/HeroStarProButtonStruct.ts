/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarProButton from "../../Extends/ModuleHero/HeroStarProButton";

export default class HeroStarProButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_labelCurNum : fgui.GTextField;
	public m_labelNewNum : fgui.GTextField;

	
	public static URL:string = "ui://lxpvy4fwvpjn84";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroStarProButton {
		return <HeroStarProButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroStarProButton"));
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
		this.m_labelCurNum = <fgui.GTextField><any>(this.getChild("labelCurNum"));
		this.m_labelNewNum = <fgui.GTextField><any>(this.getChild("labelNewNum"));
		
		
	}
}