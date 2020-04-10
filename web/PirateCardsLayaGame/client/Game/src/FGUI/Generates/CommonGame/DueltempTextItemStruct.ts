/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempTextItem from "../../Extends/CommonGame/DueltempTextItem";

export default class DueltempTextItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9nbar1j";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():DueltempTextItem {
		return <DueltempTextItem><any>(fgui.UIPackage.createObject("CommonGame","DueltempTextItem"));
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