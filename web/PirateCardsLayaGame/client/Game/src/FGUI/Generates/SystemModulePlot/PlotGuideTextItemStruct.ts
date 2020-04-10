/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotGuideTextItem from "../../Extends/SystemModulePlot/PlotGuideTextItem";

export default class PlotGuideTextItemStruct extends fgui.GComponent
{
	public m_bgState : fgui.Controller;
	public m_posState : fgui.Controller;
	public m_labelDesc : fgui.GTextField;
	public m_labelName : fgui.GTextField;

	
	public static URL:string = "ui://be275eg3vlowd";
	
	public static DependPackages:string[] = ["SystemModulePlot"];

	
	public static createInstance():PlotGuideTextItem {
		return <PlotGuideTextItem><any>(fgui.UIPackage.createObject("SystemModulePlot","PlotGuideTextItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_bgState = this.getController("bgState");
		this.m_posState = this.getController("posState");

		
		this.m_labelDesc = <fgui.GTextField><any>(this.getChild("labelDesc"));
		this.m_labelName = <fgui.GTextField><any>(this.getChild("labelName"));
		
		
	}
}