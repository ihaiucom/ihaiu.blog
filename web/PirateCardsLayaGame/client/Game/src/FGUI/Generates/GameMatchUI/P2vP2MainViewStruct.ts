/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2MainView from "../../Extends/GameMatchUI/P2vP2MainView";

export default class P2vP2MainViewStruct extends fgui.GComponent
{
	public m_labTime : fgui.GTextField;
	public m_btnMatch : fgui.GButton;
	public m_btnReturn : fgui.GButton;

	
	public static URL:string = "ui://axwa07kx10h6w16";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():P2vP2MainView {
		return <P2vP2MainView><any>(fgui.UIPackage.createObject("GameMatchUI","P2vP2MainView"));
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