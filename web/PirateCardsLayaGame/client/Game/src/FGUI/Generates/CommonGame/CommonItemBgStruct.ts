/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonItemBg from "../../Extends/CommonGame/CommonItemBg";

export default class CommonItemBgStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9k2bwz5z";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommonItemBg {
		return <CommonItemBg><any>(fgui.UIPackage.createObject("CommonGame","CommonItemBg"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		
		
	}
}