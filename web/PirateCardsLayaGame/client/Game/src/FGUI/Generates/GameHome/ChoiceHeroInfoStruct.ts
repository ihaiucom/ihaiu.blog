/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroInfoKey from "../../Extends/GameHome/HeroInfoKey";
import HeroInfoBomb from "../../Extends/GameHome/HeroInfoBomb";
import HeroInfoGun from "../../Extends/GameHome/HeroInfoGun";
import ChoiceHeroInfo from "../../Extends/GameHome/ChoiceHeroInfo";

export default class ChoiceHeroInfoStruct extends fgui.GComponent
{
	public m_hero : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_heroKey : HeroInfoKey;
	public m_heroBase : fgui.GComponent;
	public m_heroBomb : HeroInfoBomb;
	public m_gunHero : HeroInfoGun;
	public m_backBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy8p";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ChoiceHeroInfo {
		return <ChoiceHeroInfo><any>(fgui.UIPackage.createObject("GameHome","ChoiceHeroInfo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_hero = this.getController("hero");

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_heroKey = <HeroInfoKey><any>(this.getChild("heroKey"));
		this.m_heroBase = <fgui.GComponent><any>(this.getChild("heroBase"));
		this.m_heroBomb = <HeroInfoBomb><any>(this.getChild("heroBomb"));
		this.m_gunHero = <HeroInfoGun><any>(this.getChild("gunHero"));
		this.m_backBtn = <fgui.GButton><any>(this.getChild("backBtn"));
		
		
	}
}