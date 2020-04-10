/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionVerticalStar from "../../Extends/GameSectionsUI/SectionVerticalStar";

export default class SectionVerticalStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;

	
	public static URL:string = "ui://0ajdzfv8l03wz2k";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionVerticalStar {
		return <SectionVerticalStar><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionVerticalStar"));
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