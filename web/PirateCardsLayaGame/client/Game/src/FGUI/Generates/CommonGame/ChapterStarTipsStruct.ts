/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChapterStarTips from "../../Extends/CommonGame/ChapterStarTips";

export default class ChapterStarTipsStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://4snov4n9hdj6z52";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ChapterStarTips {
		return <ChapterStarTips><any>(fgui.UIPackage.createObject("CommonGame","ChapterStarTips"));
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