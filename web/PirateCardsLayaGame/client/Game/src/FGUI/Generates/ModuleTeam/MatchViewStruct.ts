/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchView from "../../Extends/ModuleTeam/MatchView";

export default class MatchViewStruct extends fgui.GComponent
{
	public m_labAim : fgui.GTextField;
	public m_labTime : fgui.GTextField;
	public m_btnCancle : fgui.GButton;

	
	public static URL:string = "ui://2ri2ybgk7xx415";
	
	public static DependPackages:string[] = ["ModuleTeam"];

	
	public static createInstance():MatchView {
		return <MatchView><any>(fgui.UIPackage.createObject("ModuleTeam","MatchView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labAim = <fgui.GTextField><any>(this.getChild("labAim"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_btnCancle = <fgui.GButton><any>(this.getChild("btnCancle"));
		
		
	}
}