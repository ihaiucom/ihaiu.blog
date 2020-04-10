/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSkillIconButton from "../../Extends/ModuleHero/HeroSkillIconButton";

export default class HeroSkillIconButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://lxpvy4fwj90me9h";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroSkillIconButton {
		return <HeroSkillIconButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroSkillIconButton"));
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
		
		
	}
}