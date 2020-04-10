/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLPlayerItem from "../../Extends/GameMatchUI/MatchLPlayerItem";
import MatchRPlayerItem from "../../Extends/GameMatchUI/MatchRPlayerItem";
import P2vP2MainNewView from "../../Extends/GameMatchUI/P2vP2MainNewView";

export default class P2vP2MainNewViewStruct extends fgui.GComponent
{
	public m_player2Item : MatchLPlayerItem;
	public m_player1Item : MatchLPlayerItem;
	public m_player3Item : MatchRPlayerItem;
	public m_player4Item : MatchRPlayerItem;
	public m_btnReturn : fgui.GButton;
	public m_btnMatch : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxuqxnw18";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():P2vP2MainNewView {
		return <P2vP2MainNewView><any>(fgui.UIPackage.createObject("GameMatchUI","P2vP2MainNewView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_player2Item = <MatchLPlayerItem><any>(this.getChild("player2Item"));
		this.m_player1Item = <MatchLPlayerItem><any>(this.getChild("player1Item"));
		this.m_player3Item = <MatchRPlayerItem><any>(this.getChild("player3Item"));
		this.m_player4Item = <MatchRPlayerItem><any>(this.getChild("player4Item"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		this.m_btnMatch = <fgui.GButton><any>(this.getChild("btnMatch"));
		
		
	}
}