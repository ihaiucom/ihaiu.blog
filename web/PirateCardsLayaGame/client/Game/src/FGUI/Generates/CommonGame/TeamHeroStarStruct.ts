/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamHeroStar from "../../Extends/CommonGame/TeamHeroStar";

export default class TeamHeroStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9cv08z5l";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():TeamHeroStar {
		return <TeamHeroStar><any>(fgui.UIPackage.createObject("CommonGame","TeamHeroStar"));
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