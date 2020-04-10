/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarPos from "../../Extends/CommonGame/HeroStarPos";
import HeroIconItemButton from "../../Extends/ModuleHero/HeroIconItemButton";

export default class HeroIconItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_inBattle : fgui.Controller;
	public m_sprQualityA : fgui.GImage;
	public m_sprQualityS : fgui.GImage;
	public m_icon : fgui.GLoader;
	public m_star : HeroStarPos;

	
	public static URL:string = "ui://lxpvy4fwi4xye8x";
	
	public static DependPackages:string[] = ["ModuleHero","CommonGame"];

	
	public static createInstance():HeroIconItemButton {
		return <HeroIconItemButton><any>(fgui.UIPackage.createObject("ModuleHero","HeroIconItemButton"));
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
		this.m_inBattle = this.getController("inBattle");

		
		this.m_sprQualityA = <fgui.GImage><any>(this.getChild("sprQualityA"));
		this.m_sprQualityS = <fgui.GImage><any>(this.getChild("sprQualityS"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_star = <HeroStarPos><any>(this.getChild("star"));
		
		
	}
}