/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroUseItem from "../../Extends/ModuleHero/HeroUseItem";

export default class HeroUseItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_itemLoader : fgui.GLoader;
	public m_numBg : fgui.GImage;
	public m_labelNum : fgui.GTextField;

	
	public static URL:string = "ui://lxpvy4fwq00924";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroUseItem {
		return <HeroUseItem><any>(fgui.UIPackage.createObject("ModuleHero","HeroUseItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_itemLoader = <fgui.GLoader><any>(this.getChild("itemLoader"));
		this.m_numBg = <fgui.GImage><any>(this.getChild("numBg"));
		this.m_labelNum = <fgui.GTextField><any>(this.getChild("labelNum"));
		
		
	}
}