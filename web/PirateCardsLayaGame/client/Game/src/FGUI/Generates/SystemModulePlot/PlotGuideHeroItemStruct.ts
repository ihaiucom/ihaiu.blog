/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotGuideHeroItem from "../../Extends/SystemModulePlot/PlotGuideHeroItem";

export default class PlotGuideHeroItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_pos : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_iconMask : fgui.GLoader;

	
	public static URL:string = "ui://be275eg3mgs1j";
	
	public static DependPackages:string[] = ["SystemModulePlot"];

	
	public static createInstance():PlotGuideHeroItem {
		return <PlotGuideHeroItem><any>(fgui.UIPackage.createObject("SystemModulePlot","PlotGuideHeroItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_pos = this.getController("pos");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_iconMask = <fgui.GLoader><any>(this.getChild("iconMask"));
		
		
	}
}