/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLPlayerItem from "../../Extends/GameMatchUI/MatchLPlayerItem";
import PvEMainNewView from "../../Extends/GameMatchUI/PvEMainNewView";

export default class PvEMainNewViewStruct extends fgui.GComponent
{
	public m_player1Item : MatchLPlayerItem;
	public m_player2Item : MatchLPlayerItem;
	public m_btnReturn : fgui.GButton;
	public m_btnMatch : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxbrlaw1z";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():PvEMainNewView {
		return <PvEMainNewView><any>(fgui.UIPackage.createObject("GameMatchUI","PvEMainNewView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_player1Item = <MatchLPlayerItem><any>(this.getChild("player1Item"));
		this.m_player2Item = <MatchLPlayerItem><any>(this.getChild("player2Item"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		this.m_btnMatch = <fgui.GButton><any>(this.getChild("btnMatch"));
		
		
	}
}