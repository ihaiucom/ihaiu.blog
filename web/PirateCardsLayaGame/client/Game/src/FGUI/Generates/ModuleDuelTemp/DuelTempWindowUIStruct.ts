/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead3 from "../../Extends/CommonGame/WindowHead3";
import SelectHeroGroup from "../../Extends/ModuleDuelTemp/SelectHeroGroup";
import DuelTempInfoView from "../../Extends/ModuleDuelTemp/DuelTempInfoView";
import DuelTempButton from "../../Extends/ModuleDuelTemp/DuelTempButton";
import CommonButtonNew from "../../Extends/CommonBase/CommonButtonNew";
import DueltempDuelPoint from "../../Extends/CommonGame/DueltempDuelPoint";
import SeasonRewardPanel from "../../Extends/ModuleDuelTemp/SeasonRewardPanel";
import DuelTempTaskView from "../../Extends/ModuleDuelTemp/DuelTempTaskView";
import DuelTempWindowUI from "../../Extends/ModuleDuelTemp/DuelTempWindowUI";

export default class DuelTempWindowUIStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;
	public m_selectedGroup : fgui.GTextField;
	public m_loseBaseJDScore : fgui.GTextField;
	public m_maxJDScore : fgui.GTextField;
	public m_list : fgui.GList;
	public m_background : fgui.GLoader;
	public m_head : WindowHead3;
	public m_selectBtn : SelectHeroGroup;
	public m_infoView : DuelTempInfoView;
	public m_dayBtn : DuelTempButton;
	public m_weekBtn : DuelTempButton;
	public m_seasonBtn : DuelTempButton;
	public m_ladderBtn : DuelTempButton;
	public m_fameBtn : DuelTempButton;
	public m_matchBtn : CommonButtonNew;
	public m_rewardPoint : DueltempDuelPoint;
	public m_seasonPanel : SeasonRewardPanel;
	public m_dailyTask : DuelTempTaskView;
	public m_weeklyTask : DuelTempTaskView;

	
	public static URL:string = "ui://rx0filvjtgxh0";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame","CommonBase"];

	
	public static createInstance():DuelTempWindowUI {
		return <DuelTempWindowUI><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tab = this.getController("tab");

		
		this.m_selectedGroup = <fgui.GTextField><any>(this.getChild("selectedGroup"));
		this.m_loseBaseJDScore = <fgui.GTextField><any>(this.getChild("loseBaseJDScore"));
		this.m_maxJDScore = <fgui.GTextField><any>(this.getChild("maxJDScore"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_head = <WindowHead3><any>(this.getChild("head"));
		this.m_selectBtn = <SelectHeroGroup><any>(this.getChild("selectBtn"));
		this.m_infoView = <DuelTempInfoView><any>(this.getChild("infoView"));
		this.m_dayBtn = <DuelTempButton><any>(this.getChild("dayBtn"));
		this.m_weekBtn = <DuelTempButton><any>(this.getChild("weekBtn"));
		this.m_seasonBtn = <DuelTempButton><any>(this.getChild("seasonBtn"));
		this.m_ladderBtn = <DuelTempButton><any>(this.getChild("ladderBtn"));
		this.m_fameBtn = <DuelTempButton><any>(this.getChild("fameBtn"));
		this.m_matchBtn = <CommonButtonNew><any>(this.getChild("matchBtn"));
		this.m_rewardPoint = <DueltempDuelPoint><any>(this.getChild("rewardPoint"));
		this.m_seasonPanel = <SeasonRewardPanel><any>(this.getChild("seasonPanel"));
		this.m_dailyTask = <DuelTempTaskView><any>(this.getChild("dailyTask"));
		this.m_weeklyTask = <DuelTempTaskView><any>(this.getChild("weeklyTask"));
		
		
	}
}