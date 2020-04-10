/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItem3 from "../../Extends/CommonGame/CommonRewardItem3";

export default class CommonRewardItem3Struct extends fgui.GLabel
{
	public m_isFirst : fgui.Controller;
	public m_itemQuality : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9oue8z6g";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommonRewardItem3 {
		return <CommonRewardItem3><any>(fgui.UIPackage.createObject("CommonGame","CommonRewardItem3"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isFirst = this.getController("isFirst");
		this.m_itemQuality = this.getController("itemQuality");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}