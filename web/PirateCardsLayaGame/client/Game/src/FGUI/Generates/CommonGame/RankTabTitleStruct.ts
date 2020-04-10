/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankTabTitle from "../../Extends/CommonGame/RankTabTitle";

export default class RankTabTitleStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9hven1p";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():RankTabTitle {
		return <RankTabTitle><any>(fgui.UIPackage.createObject("CommonGame","RankTabTitle"));
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