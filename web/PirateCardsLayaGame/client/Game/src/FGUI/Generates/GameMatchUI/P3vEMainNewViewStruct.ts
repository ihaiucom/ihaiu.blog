/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLPlayerItem from "../../Extends/GameMatchUI/MatchLPlayerItem";
import P3vEMainNewView from "../../Extends/GameMatchUI/P3vEMainNewView";

export default class P3vEMainNewViewStruct extends fgui.GComponent
{
	public m_player1Item : MatchLPlayerItem;
	public m_player2Item : MatchLPlayerItem;
	public m_btnReturn : fgui.GButton;
	public m_btnMatch : fgui.GButton;

	
	public static URL:string = "ui://axwa07kxldc2w2b";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():P3vEMainNewView {
		return <P3vEMainNewView><any>(fgui.UIPackage.createObject("GameMatchUI","P3vEMainNewView"));
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