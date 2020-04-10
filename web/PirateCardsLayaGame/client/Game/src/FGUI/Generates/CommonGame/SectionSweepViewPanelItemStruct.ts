/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";
import SectionSweepViewPanelItem from "../../Extends/CommonGame/SectionSweepViewPanelItem";

export default class SectionSweepViewPanelItemStruct extends fgui.GLabel
{
	public m_times : fgui.Controller;
	public m_View : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_list : fgui.GList;
	public m_exp : BaseRewardItem;
	public m_silver : BaseRewardItem;

	
	public static URL:string = "ui://4snov4n9si8zz2z";
	
	public static DependPackages:string[] = ["CommonGame","GameSectionsUI","_ResImageUIV1"];

	
	public static createInstance():SectionSweepViewPanelItem {
		return <SectionSweepViewPanelItem><any>(fgui.UIPackage.createObject("CommonGame","SectionSweepViewPanelItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_times = this.getController("times");
		this.m_View = this.getController("View");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_exp = <BaseRewardItem><any>(this.getChild("exp"));
		this.m_silver = <BaseRewardItem><any>(this.getChild("silver"));
		
		
	}
}