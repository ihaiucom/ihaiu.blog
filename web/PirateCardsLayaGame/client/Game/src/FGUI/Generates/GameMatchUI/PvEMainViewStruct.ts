/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvEMainView from "../../Extends/GameMatchUI/PvEMainView";

export default class PvEMainViewStruct extends fgui.GComponent
{
	public m_labTime : fgui.GTextField;
	public m_btnMatch : fgui.GButton;
	public m_btnReturn : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxi3ez15";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():PvEMainView {
		return <PvEMainView><any>(fgui.UIPackage.createObject("GameMatchUI","PvEMainView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_btnMatch = <fgui.GButton><any>(this.getChild("btnMatch"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		
		
	}
}