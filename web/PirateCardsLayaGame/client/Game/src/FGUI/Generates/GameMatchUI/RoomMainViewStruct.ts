/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomMainView from "../../Extends/GameMatchUI/RoomMainView";

export default class RoomMainViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_listPlayer : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_labTime : fgui.GTextField;
	public m_labInfo : fgui.GTextField;
	public m_btnStart : fgui.GButton;
	public m_btnReady : fgui.GButton;
	public m_btnLeave : fgui.GButton;
	public m_btnReturn : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxi3ez13";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():RoomMainView {
		return <RoomMainView><any>(fgui.UIPackage.createObject("GameMatchUI","RoomMainView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_listPlayer = <fgui.GList><any>(this.getChild("listPlayer"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_labInfo = <fgui.GTextField><any>(this.getChild("labInfo"));
		this.m_btnStart = <fgui.GButton><any>(this.getChild("btnStart"));
		this.m_btnReady = <fgui.GButton><any>(this.getChild("btnReady"));
		this.m_btnLeave = <fgui.GButton><any>(this.getChild("btnLeave"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		
		
	}
}