/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroUseItemButton from "../../Extends/ModuleHero/HeroUseItemButton";

export default class HeroUseItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_color : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_itemLoader : fgui.GLoader;
	public m_numBg : fgui.GLoader;
	public m_labelNum : fgui.GTextField;
	public m_labelNeedNum : fgui.GTextField;

	
	public static URL:string = "ui://lxpvy4fwkbuue9m";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroUseItemButton {
		return <HeroUseItemButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroUseItemButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_color = this.getController("color");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_itemLoader = <fgui.GLoader><any>(this.getChild("itemLoader"));
		this.m_numBg = <fgui.GLoader><any>(this.getChild("numBg"));
		this.m_labelNum = <fgui.GTextField><any>(this.getChild("labelNum"));
		this.m_labelNeedNum = <fgui.GTextField><any>(this.getChild("labelNeedNum"));
		
		
	}
}