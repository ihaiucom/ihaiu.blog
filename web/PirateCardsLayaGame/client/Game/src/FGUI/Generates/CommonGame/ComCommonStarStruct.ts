/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonStar from "../../Extends/CommonGame/ComCommonStar";

export default class ComCommonStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;
	public m_starPos : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9gf6223";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ComCommonStar {
		return <ComCommonStar><any>(fgui.UIPackage.createObject("CommonGame","ComCommonStar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");
		this.m_starPos = this.getController("starPos");

		
		
		
	}
}