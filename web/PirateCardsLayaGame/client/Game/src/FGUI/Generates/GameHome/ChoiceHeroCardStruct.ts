/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSprite from "../../Extends/GameHome/HeroSprite";
import ChoiceHeroCard from "../../Extends/GameHome/ChoiceHeroCard";

export default class ChoiceHeroCardStruct extends fgui.GComponent
{
	public m_bg : fgui.GImage;
	public m_coinIcon : fgui.GImage;
	public m_coinText : fgui.GTextField;
	public m_coinGroup : fgui.GGroup;
	public m_heroSprite : HeroSprite;
	public m_infoBtn : fgui.GButton;
	public m_lock : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy8u";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ChoiceHeroCard {
		return <ChoiceHeroCard><any>(fgui.UIPackage.createObject("GameHome","ChoiceHeroCard"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_coinIcon = <fgui.GImage><any>(this.getChild("coinIcon"));
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		this.m_coinGroup = <fgui.GGroup><any>(this.getChild("coinGroup"));
		this.m_heroSprite = <HeroSprite><any>(this.getChild("heroSprite"));
		this.m_infoBtn = <fgui.GButton><any>(this.getChild("infoBtn"));
		this.m_lock = <fgui.GComponent><any>(this.getChild("lock"));
		
		
	}
}