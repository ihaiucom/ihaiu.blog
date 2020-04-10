/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PauseView from "../../Extends/GameWarUI/PauseView";

export default class PauseViewStruct extends fgui.GComponent
{
	public m_btnContinu : fgui.GButton;
	public m_btnExite : fgui.GButton;

	
	public static URL:string = "ui://rfow21emq5z24g";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PauseView {
		return <PauseView><any>(fgui.UIPackage.createObject("GameWarUI","PauseView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnContinu = <fgui.GButton><any>(this.getChild("btnContinu"));
		this.m_btnExite = <fgui.GButton><any>(this.getChild("btnExite"));
		
		
	}
}