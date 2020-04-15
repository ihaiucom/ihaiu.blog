/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSprite from "../../Extends/GameHome/HeroSprite";
import CardLifeHero from "../../Extends/GameHome/CardLifeHero";
import CardShield from "../../Extends/GameHome/CardShield";
import CardShopBar from "../../Extends/GameHome/CardShopBar";
import CardViewFrontHero from "../../Extends/GameHome/CardViewFrontHero";

export default class CardViewFrontHeroStruct extends fgui.GButton
{
	public m_bg : fgui.GLoader;
	public m_icon : HeroSprite;
	public m_life : CardLifeHero;
	public m_shield : CardShield;
	public m_shopBar : CardShopBar;

	
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
		this.m_icon = <HeroSprite><any>(this.getChild("icon"));
		this.m_life = <CardLifeHero><any>(this.getChild("life"));
		this.m_shield = <CardShield><any>(this.getChild("shield"));
		this.m_shopBar = <CardShopBar><any>(this.getChild("shopBar"));
		
		
	}
}