/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";

export default class BaseRewardItemStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9m4lu3h";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():BaseRewardItem {
		return <BaseRewardItem><any>(fgui.UIPackage.createObject("CommonGame","BaseRewardItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		
		
	}
}