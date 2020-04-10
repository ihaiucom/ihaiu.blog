/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonRewardItem from "../../Extends/CommonGame/CommonRewardItem";

export default class CommonRewardItemStruct extends fgui.GLabel
{
	public m_isFirst : fgui.Controller;
	public m_itemQuality : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n98c203j";
	
	public static DependPackages:string[] = ["CommonGame","GameSectionsUI"];

	
	public static createInstance():CommonRewardItem {
		return <CommonRewardItem><any>(fgui.UIPackage.createObject("CommonGame","CommonRewardItem"));
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