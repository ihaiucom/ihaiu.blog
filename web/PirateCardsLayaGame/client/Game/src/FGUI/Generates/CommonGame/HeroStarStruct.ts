/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStar from "../../Extends/CommonGame/HeroStar";

export default class HeroStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9lzv91";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():HeroStar {
		return <HeroStar><any>(fgui.UIPackage.createObject("CommonGame","HeroStar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");

		
		
		
	}
}