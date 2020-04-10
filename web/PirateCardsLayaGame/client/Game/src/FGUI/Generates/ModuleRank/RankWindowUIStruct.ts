/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankComboTab from "../../Extends/ModuleRank/RankComboTab";
import WindowHead3 from "../../Extends/CommonGame/WindowHead3";
import RankDuelTempFame from "../../Extends/ModuleRank/RankDuelTempFame";
import RankDuelTempFameHistory from "../../Extends/ModuleRank/RankDuelTempFameHistory";
import RankDuelTempLadder from "../../Extends/ModuleRank/RankDuelTempLadder";
import RankComboItem from "../../Extends/ModuleRank/RankComboItem";
import RankWindowUI from "../../Extends/ModuleRank/RankWindowUI";

export default class RankWindowUIStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;
	public m_group : fgui.Controller;
	public m_ladderTab : RankComboTab;
	public m_fameTab : RankComboTab;
	public m_head : WindowHead3;
	public m_fame : RankDuelTempFame;
	public m_history : RankDuelTempFameHistory;
	public m_ladder : RankDuelTempLadder;
	public m_serverTab : RankComboItem;
	public m_tatalTab : RankComboItem;
	public m_historyTab : RankComboItem;
	public m_hallTab : RankComboItem;

	
	public static URL:string = "ui://47fv9ahvtgxh0";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame","CommonBase"];

	
	public static createInstance():RankWindowUI {
		return <RankWindowUI><any>(fgui.UIPackage.createObject("ModuleRank","RankWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tab = this.getController("tab");
		this.m_group = this.getController("group");

		
		this.m_ladderTab = <RankComboTab><any>(this.getChild("ladderTab"));
		this.m_fameTab = <RankComboTab><any>(this.getChild("fameTab"));
		this.m_head = <WindowHead3><any>(this.getChild("head"));
		this.m_fame = <RankDuelTempFame><any>(this.getChild("fame"));
		this.m_history = <RankDuelTempFameHistory><any>(this.getChild("history"));
		this.m_ladder = <RankDuelTempLadder><any>(this.getChild("ladder"));
		this.m_serverTab = <RankComboItem><any>(this.getChild("serverTab"));
		this.m_tatalTab = <RankComboItem><any>(this.getChild("tatalTab"));
		this.m_historyTab = <RankComboItem><any>(this.getChild("historyTab"));
		this.m_hallTab = <RankComboItem><any>(this.getChild("hallTab"));
		
		
	}
}