/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FatigueItem from "../../Extends/CommonGame/FatigueItem";

export default class FatigueItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n98c203k";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():FatigueItem {
		return <FatigueItem><any>(fgui.UIPackage.createObject("CommonGame","FatigueItem"));
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