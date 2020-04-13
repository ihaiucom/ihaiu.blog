/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontHero from "../../Extends/GameHome/CardViewFrontHero";

export default class CardViewFrontHeroStruct extends fgui.GButton
{
	public m_bg : fgui.GLoader;
	public m_icon : fgui.GLabel;
	public m_life : fgui.GLabel;
	public m_shield : fgui.GLabel;
	public m_shopBar : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy9v";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontHero {
		return <CardViewFrontHero><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontHero"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_icon = <fgui.GLabel><any>(this.getChild("icon"));
		this.m_life = <fgui.GLabel><any>(this.getChild("life"));
		this.m_shield = <fgui.GLabel><any>(this.getChild("shield"));
		this.m_shopBar = <fgui.GComponent><any>(this.getChild("shopBar"));
		
		
	}
}