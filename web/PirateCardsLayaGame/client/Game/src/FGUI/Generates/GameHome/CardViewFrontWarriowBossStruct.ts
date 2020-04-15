/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SpriteBoss from "../../Extends/GameHome/SpriteBoss";
import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontWarriowBoss from "../../Extends/GameHome/CardViewFrontWarriowBoss";

export default class CardViewFrontWarriowBossStruct extends fgui.GButton
{
	public m_bg : fgui.GLoader;
	public m_icon : SpriteBoss;
	public m_life : CardLifeWarriow;

	
	public static URL:string = "ui://moe42ygrsqzya6";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontWarriowBoss {
		return <CardViewFrontWarriowBoss><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontWarriowBoss"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_icon = <SpriteBoss><any>(this.getChild("icon"));
		this.m_life = <CardLifeWarriow><any>(this.getChild("life"));
		
		
	}
}