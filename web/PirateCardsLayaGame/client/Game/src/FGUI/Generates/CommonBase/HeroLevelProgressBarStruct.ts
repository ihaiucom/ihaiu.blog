/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroLevelProgressBar from "../../Extends/CommonBase/HeroLevelProgressBar";

export default class HeroLevelProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicvpjn19";
	
	public static DependPackages:string[] = ["CommonBase","ModuleHero"];

	
	public static createInstance():HeroLevelProgressBar {
		return <HeroLevelProgressBar><any>(fgui.UIPackage.createObject("CommonBase","HeroLevelProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}