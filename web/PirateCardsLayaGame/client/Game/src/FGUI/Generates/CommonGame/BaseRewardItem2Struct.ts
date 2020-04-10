/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseRewardItem2 from "../../Extends/CommonGame/BaseRewardItem2";

export default class BaseRewardItem2Struct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9oue8z6h";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():BaseRewardItem2 {
		return <BaseRewardItem2><any>(fgui.UIPackage.createObject("CommonGame","BaseRewardItem2"));
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