/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarPos from "../../Extends/CommonGame/HeroStarPos";
import HeroItemButton from "../../Extends/ModuleHero/HeroItemButton";

export default class HeroItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_state : fgui.Controller;
	public m_battleSelect : fgui.Controller;
	public m_showType : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_name : fgui.GTextField;
	public m_frame : fgui.GLoader;
	public m_star : HeroStarPos;

	
	public static URL:string = "ui://lxpvy4fwlnnh7q";
	
	public static DependPackages:string[] = ["ModuleHero","CommonGame"];

	
	public static createInstance():HeroItemButton {
		return <HeroItemButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroItemButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_quality = this.getController("quality");
		this.m_state = this.getController("state");
		this.m_battleSelect = this.getController("battleSelect");
		this.m_showType = this.getController("showType");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_frame = <fgui.GLoader><any>(this.getChild("frame"));
		this.m_star = <HeroStarPos><any>(this.getChild("star"));
		
		
	}
}