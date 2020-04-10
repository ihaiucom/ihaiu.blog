/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLHeroItem from "../../Extends/GameMatchUI/MatchLHeroItem";
import CommonButtonNew from "../../Extends/CommonBase/CommonButtonNew";
import PlayerHeadIcon from "../../Extends/CommonGame/PlayerHeadIcon";
import MatchRHeroItem from "../../Extends/GameMatchUI/MatchRHeroItem";
import PvPMainNewView from "../../Extends/GameMatchUI/PvPMainNewView";

export default class PvPMainNewViewStruct extends fgui.GComponent
{
	public m_matchState : fgui.Controller;
	public m_name1 : fgui.GTextField;
	public m_danName1 : fgui.GTextField;
	public m_winTimes1 : fgui.GTextField;
	public m_player1 : fgui.GGroup;
	public m_name2 : fgui.GTextField;
	public m_danName2 : fgui.GTextField;
	public m_winTimes2 : fgui.GTextField;
	public m_progress2 : fgui.GTextField;
	public m_player2 : fgui.GGroup;
	public m_matchTime : fgui.GTextField;
	public m_player1Item2 : MatchLHeroItem;
	public m_player1Item1 : MatchLHeroItem;
	public m_player1Item0 : MatchLHeroItem;
	public m_btnMatch : CommonButtonNew;
	public m_headIcon1 : PlayerHeadIcon;
	public m_headIcon2 : PlayerHeadIcon;
	public m_player2Item0 : MatchRHeroItem;
	public m_player2Item1 : MatchRHeroItem;
	public m_player2Item2 : MatchRHeroItem;

	
	public static URL:string = "ui://axwa07kxbrlaw20";
	
	public static DependPackages:string[] = ["GameMatchUI","CommonGame","CommonBase"];

	
	public static createInstance():PvPMainNewView {
		return <PvPMainNewView><any>(fgui.UIPackage.createObject("GameMatchUI","PvPMainNewView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_matchState = this.getController("matchState");

		
		this.m_name1 = <fgui.GTextField><any>(this.getChild("name1"));
		this.m_danName1 = <fgui.GTextField><any>(this.getChild("danName1"));
		this.m_winTimes1 = <fgui.GTextField><any>(this.getChild("winTimes1"));
		this.m_player1 = <fgui.GGroup><any>(this.getChild("player1"));
		this.m_name2 = <fgui.GTextField><any>(this.getChild("name2"));
		this.m_danName2 = <fgui.GTextField><any>(this.getChild("danName2"));
		this.m_winTimes2 = <fgui.GTextField><any>(this.getChild("winTimes2"));
		this.m_progress2 = <fgui.GTextField><any>(this.getChild("progress2"));
		this.m_player2 = <fgui.GGroup><any>(this.getChild("player2"));
		this.m_matchTime = <fgui.GTextField><any>(this.getChild("matchTime"));
		this.m_player1Item2 = <MatchLHeroItem><any>(this.getChild("player1Item2"));
		this.m_player1Item1 = <MatchLHeroItem><any>(this.getChild("player1Item1"));
		this.m_player1Item0 = <MatchLHeroItem><any>(this.getChild("player1Item0"));
		this.m_btnMatch = <CommonButtonNew><any>(this.getChild("btnMatch"));
		this.m_headIcon1 = <PlayerHeadIcon><any>(this.getChild("headIcon1"));
		this.m_headIcon2 = <PlayerHeadIcon><any>(this.getChild("headIcon2"));
		this.m_player2Item0 = <MatchRHeroItem><any>(this.getChild("player2Item0"));
		this.m_player2Item1 = <MatchRHeroItem><any>(this.getChild("player2Item1"));
		this.m_player2Item2 = <MatchRHeroItem><any>(this.getChild("player2Item2"));
		
		
	}
}