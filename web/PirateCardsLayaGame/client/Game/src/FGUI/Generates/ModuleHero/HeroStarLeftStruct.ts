/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarLeft from "../../Extends/ModuleHero/HeroStarLeft";

export default class HeroStarLeftStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;
	public m_1 : fgui.GImage;
	public m_2 : fgui.GImage;
	public m_3 : fgui.GImage;
	public m_4 : fgui.GImage;
	public m_5 : fgui.GImage;

	
	public static URL:string = "ui://lxpvy4fwbwlm1u";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroStarLeft {
		return <HeroStarLeft><any>(fgui.UIPackage.createObject("ModuleHero","HeroStarLeft"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");

		
		this.m_1 = <fgui.GImage><any>(this.getChild("1"));
		this.m_2 = <fgui.GImage><any>(this.getChild("2"));
		this.m_3 = <fgui.GImage><any>(this.getChild("3"));
		this.m_4 = <fgui.GImage><any>(this.getChild("4"));
		this.m_5 = <fgui.GImage><any>(this.getChild("5"));
		
		
	}
}