/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifeHero from "../../Extends/GameHome/CardLifeHero";

export default class CardLifeHeroStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrsqzy9u";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardLifeHero {
		return <CardLifeHero><any>(fgui.UIPackage.createObject("GameHome","CardLifeHero"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}