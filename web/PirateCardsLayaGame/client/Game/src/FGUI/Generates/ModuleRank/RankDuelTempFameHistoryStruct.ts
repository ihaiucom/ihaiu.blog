/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameHistoryItem from "../../Extends/ModuleRank/RankDuelTempFameHistoryItem";
import RankSwitchButton from "../../Extends/ModuleRank/RankSwitchButton";
import RankDuelTempFameHistory from "../../Extends/ModuleRank/RankDuelTempFameHistory";

export default class RankDuelTempFameHistoryStruct extends fgui.GComponent
{
	public m_isEmpty : fgui.Controller;
	public m_rank1 : RankDuelTempFameHistoryItem;
	public m_rank2 : RankDuelTempFameHistoryItem;
	public m_rank3 : RankDuelTempFameHistoryItem;
	public m_rank4 : RankDuelTempFameHistoryItem;
	public m_rank5 : RankDuelTempFameHistoryItem;
	public m_leftBtn : RankSwitchButton;
	public m_rightBtn : RankSwitchButton;

	
	public static URL:string = "ui://47fv9ahvvdq7v";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempFameHistory {
		return <RankDuelTempFameHistory><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempFameHistory"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isEmpty = this.getController("isEmpty");

		
		this.m_rank1 = <RankDuelTempFameHistoryItem><any>(this.getChild("rank1"));
		this.m_rank2 = <RankDuelTempFameHistoryItem><any>(this.getChild("rank2"));
		this.m_rank3 = <RankDuelTempFameHistoryItem><any>(this.getChild("rank3"));
		this.m_rank4 = <RankDuelTempFameHistoryItem><any>(this.getChild("rank4"));
		this.m_rank5 = <RankDuelTempFameHistoryItem><any>(this.getChild("rank5"));
		this.m_leftBtn = <RankSwitchButton><any>(this.getChild("leftBtn"));
		this.m_rightBtn = <RankSwitchButton><any>(this.getChild("rightBtn"));
		
		
	}
}