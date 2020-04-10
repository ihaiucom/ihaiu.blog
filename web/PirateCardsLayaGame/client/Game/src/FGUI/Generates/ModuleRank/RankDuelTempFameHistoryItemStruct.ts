/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHeadIcon from "../../Extends/CommonGame/PlayerHeadIcon";
import RankDuelTempFameHistoryItem from "../../Extends/ModuleRank/RankDuelTempFameHistoryItem";

export default class RankDuelTempFameHistoryItemStruct extends fgui.GLabel
{
	public m_rank : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_server : fgui.GTextField;
	public m_server : fgui.GTextField;
	public m_headIcon : PlayerHeadIcon;

	
	public static URL:string = "ui://47fv9ahvtdtf13";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempFameHistoryItem {
		return <RankDuelTempFameHistoryItem><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempFameHistoryItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_rank = this.getController("rank");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_server = <fgui.GTextField><any>(this.getChild("server"));
		this.m_server = <fgui.GTextField><any>(this.getChild("server"));
		this.m_headIcon = <PlayerHeadIcon><any>(this.getChild("headIcon"));
		
		
	}
}