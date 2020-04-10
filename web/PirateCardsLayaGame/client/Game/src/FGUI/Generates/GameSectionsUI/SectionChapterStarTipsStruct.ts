/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionChapterStarTips from "../../Extends/GameSectionsUI/SectionChapterStarTips";

export default class SectionChapterStarTipsStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://0ajdzfv8phnvz33";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionChapterStarTips {
		return <SectionChapterStarTips><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionChapterStarTips"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}