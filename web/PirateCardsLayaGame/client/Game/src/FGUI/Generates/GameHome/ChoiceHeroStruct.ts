/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChoiceHeroInfo from "../../Extends/GameHome/ChoiceHeroInfo";
import ChoiceHeroCard from "../../Extends/GameHome/ChoiceHeroCard";
import ChoiceHero from "../../Extends/GameHome/ChoiceHero";

export default class ChoiceHeroStruct extends fgui.GComponent
{
	public m_info : ChoiceHeroInfo;
	public m_card : ChoiceHeroCard;

	
	public static URL:string = "ui://moe42ygrsqzy8l";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ChoiceHero {
		return <ChoiceHero><any>(fgui.UIPackage.createObject("GameHome","ChoiceHero"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_info = <ChoiceHeroInfo><any>(this.getChild("info"));
		this.m_card = <ChoiceHeroCard><any>(this.getChild("card"));
		
		
	}
}