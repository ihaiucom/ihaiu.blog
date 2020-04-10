/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvPMainView from "../../Extends/GameMatchUI/PvPMainView";

export default class PvPMainViewStruct extends fgui.GComponent
{
	public m_labTime : fgui.GTextField;
	public m_btnMatch : fgui.GButton;
	public m_btnReturn : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxi3ez14";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():PvPMainView {
		return <PvPMainView><any>(fgui.UIPackage.createObject("GameMatchUI","PvPMainView"));
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