/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempResultPanel from "../../Extends/CommonGame/DueltempResultPanel";
import DueltempTextItem from "../../Extends/CommonGame/DueltempTextItem";
import DueltempDuelPoint from "../../Extends/CommonGame/DueltempDuelPoint";
import PVPBattleResultView from "../../Extends/BattleResult/PVPBattleResultView";

export default class PVPBattleResultViewStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_costTime : fgui.GTextField;
	public m_combo : fgui.GTextField;
	public m_panel : DueltempResultPanel;
	public m_baseScore : DueltempTextItem;
	public m_streakScore : DueltempTextItem;
	public m_strongEnemyScore : DueltempTextItem;
	public m_rewardPoint : DueltempDuelPoint;

	
	public static URL:string = "ui://qffcb501sso411";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame","CommonBase"];

	
	public static createInstance():PVPBattleResultView {
		return <PVPBattleResultView><any>(fgui.UIPackage.createObject("BattleResult","PVPBattleResultView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_costTime = <fgui.GTextField><any>(this.getChild("costTime"));
		this.m_combo = <fgui.GTextField><any>(this.getChild("combo"));
		this.m_panel = <DueltempResultPanel><any>(this.getChild("panel"));
		this.m_baseScore = <DueltempTextItem><any>(this.getChild("baseScore"));
		this.m_streakScore = <DueltempTextItem><any>(this.getChild("streakScore"));
		this.m_strongEnemyScore = <DueltempTextItem><any>(this.getChild("strongEnemyScore"));
		this.m_rewardPoint = <DueltempDuelPoint><any>(this.getChild("rewardPoint"));
		
		
	}
}