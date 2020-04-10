/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItem2 from "../../Extends/CommonGame/CommonRewardItem2";

export default class CommonRewardItem2Struct extends fgui.GLabel
{
	public m_itemQuality : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n98c203l";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommonRewardItem2 {
		return <CommonRewardItem2><any>(fgui.UIPackage.createObject("CommonGame","CommonRewardItem2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemQuality = this.getController("itemQuality");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}