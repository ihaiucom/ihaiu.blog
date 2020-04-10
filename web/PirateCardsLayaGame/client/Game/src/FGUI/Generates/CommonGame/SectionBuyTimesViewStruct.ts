/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionBuyTimesPanel from "../../Extends/CommonGame/SectionBuyTimesPanel";
import SectionBuyTimesView from "../../Extends/CommonGame/SectionBuyTimesView";

export default class SectionBuyTimesViewStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_panel : SectionBuyTimesPanel;

	
	public static URL:string = "ui://4snov4n9si8zz30";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():SectionBuyTimesView {
		return <SectionBuyTimesView><any>(fgui.UIPackage.createObject("CommonGame","SectionBuyTimesView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_panel = <SectionBuyTimesPanel><any>(this.getChild("panel"));
		
		
	}
}