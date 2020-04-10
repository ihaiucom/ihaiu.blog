/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvPMainView from "../../Extends/GameMatchUI/PvPMainView";
import PvPMainNewView from "../../Extends/GameMatchUI/PvPMainNewView";
import PvEMainView from "../../Extends/GameMatchUI/PvEMainView";
import PvEMainNewView from "../../Extends/GameMatchUI/PvEMainNewView";
import P2vP2MainView from "../../Extends/GameMatchUI/P2vP2MainView";
import P2vP2MainNewView from "../../Extends/GameMatchUI/P2vP2MainNewView";
import RoomListView from "../../Extends/GameMatchUI/RoomListView";
import RoomMainView from "../../Extends/GameMatchUI/RoomMainView";
import P3vEMainNewView from "../../Extends/GameMatchUI/P3vEMainNewView";
import MatchWindowUI from "../../Extends/GameMatchUI/MatchWindowUI";

export default class MatchWindowUIStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_pvpMainView : PvPMainView;
	public m_pvpNewMainView : PvPMainNewView;
	public m_pveMainView : PvEMainView;
	public m_pveNewMainView : PvEMainNewView;
	public m_twovtwoMainView : P2vP2MainView;
	public m_twovtwoNewMainView : P2vP2MainNewView;
	public m_roomListView : RoomListView;
	public m_roomMainView : RoomMainView;
	public m_p3veNewMainView : P3vEMainNewView;

	
	public static URL:string = "ui://axwa07kxi78tg";
	
	public static DependPackages:string[] = ["GameMatchUI","CommonGame","CommonBase"];

	
	public static createInstance():MatchWindowUI {
		return <MatchWindowUI><any>(fgui.UIPackage.createObject("GameMatchUI","MatchWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_pvpMainView = <PvPMainView><any>(this.getChild("pvpMainView"));
		this.m_pvpNewMainView = <PvPMainNewView><any>(this.getChild("pvpNewMainView"));
		this.m_pveMainView = <PvEMainView><any>(this.getChild("pveMainView"));
		this.m_pveNewMainView = <PvEMainNewView><any>(this.getChild("pveNewMainView"));
		this.m_twovtwoMainView = <P2vP2MainView><any>(this.getChild("twovtwoMainView"));
		this.m_twovtwoNewMainView = <P2vP2MainNewView><any>(this.getChild("twovtwoNewMainView"));
		this.m_roomListView = <RoomListView><any>(this.getChild("roomListView"));
		this.m_roomMainView = <RoomMainView><any>(this.getChild("roomMainView"));
		this.m_p3veNewMainView = <P3vEMainNewView><any>(this.getChild("p3veNewMainView"));
		
		
	}
}