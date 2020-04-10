/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarPos from "../../Extends/CommonGame/HeroStarPos";
import GashaponHeroIconButton from "../../Extends/GashaponUI/GashaponHeroIconButton";

export default class GashaponHeroIconButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_sprQualityA : fgui.GImage;
	public m_sprQualityS : fgui.GImage;
	public m_icon : fgui.GLoader;
	public m_frame : fgui.GImage;
	public m_star : HeroStarPos;

	
	public static URL:string = "ui://660ksptmnsaz1d";
	
	public static DependPackages:string[] = ["GashaponUI","CommonGame","ModuleHero"];

	
	public static createInstance():GashaponHeroIconButton {
		return <GashaponHeroIconButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponHeroIconButton"));
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

		
		this.m_sprQualityA = <fgui.GImage><any>(this.getChild("sprQualityA"));
		this.m_sprQualityS = <fgui.GImage><any>(this.getChild("sprQualityS"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_frame = <fgui.GImage><any>(this.getChild("frame"));
		this.m_star = <HeroStarPos><any>(this.getChild("star"));
		
		
	}
}