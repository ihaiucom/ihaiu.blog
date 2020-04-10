/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionStarCount from "../../Extends/GameSectionsUI/SectionStarCount";

export default class SectionStarCountStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://0ajdzfv8l03w8";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionStarCount {
		return <SectionStarCount><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionStarCount"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}