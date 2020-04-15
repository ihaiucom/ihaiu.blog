/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSprite from "../../Extends/GameHome/HeroSprite";

export default class HeroSpriteStruct extends fgui.GLabel
{
	public m_sprite : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrsqzy8m";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():HeroSprite {
		return <HeroSprite><any>(fgui.UIPackage.createObject("GameHome","HeroSprite"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_sprite = this.getController("sprite");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}