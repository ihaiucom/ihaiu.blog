/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponRewardViewPanel from "../../Extends/GashaponUI/GashaponRewardViewPanel";
import GashaponRewardView from "../../Extends/GashaponUI/GashaponRewardView";

export default class GashaponRewardViewStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_panel : GashaponRewardViewPanel;

	
	public static URL:string = "ui://660ksptmhwiga";
	
	public static DependPackages:string[] = ["GashaponUI","CommonBase"];

	
	public static createInstance():GashaponRewardView {
		return <GashaponRewardView><any>(fgui.UIPackage.createObject("GashaponUI","GashaponRewardView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_panel = <GashaponRewardViewPanel><any>(this.getChild("panel"));
		
		
	}
}