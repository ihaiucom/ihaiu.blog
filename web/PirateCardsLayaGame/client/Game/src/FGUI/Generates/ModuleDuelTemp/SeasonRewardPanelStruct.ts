/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanView from "../../Extends/ModuleDuelTemp/DuelTempDanView";
import DuelTempDanView2 from "../../Extends/ModuleDuelTemp/DuelTempDanView2";
import SeasonRewardPanel from "../../Extends/ModuleDuelTemp/SeasonRewardPanel";

export default class SeasonRewardPanelStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;
	public m_bg : fgui.GLabel;
	public m_dan : DuelTempDanView;
	public m_server : DuelTempDanView2;
	public m_btnClose : fgui.GButton;

	
	public static URL:string = "ui://rx0filvjtgxh9";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():SeasonRewardPanel {
		return <SeasonRewardPanel><any>(fgui.UIPackage.createObject("ModuleDuelTemp","SeasonRewardPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tab = this.getController("tab");

		
		this.m_bg = <fgui.GLabel><any>(this.getChild("bg"));
		this.m_dan = <DuelTempDanView><any>(this.getChild("dan"));
		this.m_server = <DuelTempDanView2><any>(this.getChild("server"));
		this.m_btnClose = <fgui.GButton><any>(this.getChild("btnClose"));
		
		
	}
}