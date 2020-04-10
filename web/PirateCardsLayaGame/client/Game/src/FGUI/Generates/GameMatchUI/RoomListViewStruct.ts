/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomListView from "../../Extends/GameMatchUI/RoomListView";

export default class RoomListViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_listRoom : fgui.GList;
	public m_labName : fgui.GTextInput;
	public m_btnBuildPvP : fgui.GButton;
	public m_btnBuildPvE : fgui.GButton;
	public m_btnBuild2v2 : fgui.GButton;
	public m_btnBuild3v3 : fgui.GButton;
	public m_btnBuild4v4 : fgui.GButton;
	public m_btnBuild5v5 : fgui.GButton;
	public m_btnReturn : fgui.GButton;
	public m_btnUpdate : fgui.GButton;
	public m_btnEnter : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxi3ez11";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():RoomListView {
		return <RoomListView><any>(fgui.UIPackage.createObject("GameMatchUI","RoomListView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_listRoom = <fgui.GList><any>(this.getChild("listRoom"));
		this.m_labName = <fgui.GTextInput><any>(this.getChild("labName"));
		this.m_btnBuildPvP = <fgui.GButton><any>(this.getChild("btnBuildPvP"));
		this.m_btnBuildPvE = <fgui.GButton><any>(this.getChild("btnBuildPvE"));
		this.m_btnBuild2v2 = <fgui.GButton><any>(this.getChild("btnBuild2v2"));
		this.m_btnBuild3v3 = <fgui.GButton><any>(this.getChild("btnBuild3v3"));
		this.m_btnBuild4v4 = <fgui.GButton><any>(this.getChild("btnBuild4v4"));
		this.m_btnBuild5v5 = <fgui.GButton><any>(this.getChild("btnBuild5v5"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		this.m_btnUpdate = <fgui.GButton><any>(this.getChild("btnUpdate"));
		this.m_btnEnter = <fgui.GButton><any>(this.getChild("btnEnter"));
		
		
	}
}