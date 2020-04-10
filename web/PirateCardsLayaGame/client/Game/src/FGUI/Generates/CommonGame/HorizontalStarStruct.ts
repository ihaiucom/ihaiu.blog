/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HorizontalStar from "../../Extends/CommonGame/HorizontalStar";

export default class HorizontalStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9pop43i";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():HorizontalStar {
		return <HorizontalStar><any>(fgui.UIPackage.createObject("CommonGame","HorizontalStar"));
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