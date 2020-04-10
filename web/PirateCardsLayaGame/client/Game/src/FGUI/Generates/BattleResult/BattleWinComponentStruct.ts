/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultCondition from "../../Extends/BattleResult/BattleResultCondition";
import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";
import BattleWinComponent from "../../Extends/BattleResult/BattleWinComponent";

export default class BattleWinComponentStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_condition1 : BattleResultCondition;
	public m_condition2 : BattleResultCondition;
	public m_condition3 : BattleResultCondition;
	public m_exp : BaseRewardItem;
	public m_heroExp : BaseRewardItem;
	public m_rewardItem : BaseRewardItem;

	
	public static URL:string = "ui://qffcb501mxqq7";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame"];

	
	public static createInstance():BattleWinComponent {
		return <BattleWinComponent><any>(fgui.UIPackage.createObject("BattleResult","BattleWinComponent"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_condition1 = <BattleResultCondition><any>(this.getChild("condition1"));
		this.m_condition2 = <BattleResultCondition><any>(this.getChild("condition2"));
		this.m_condition3 = <BattleResultCondition><any>(this.getChild("condition3"));
		this.m_exp = <BaseRewardItem><any>(this.getChild("exp"));
		this.m_heroExp = <BaseRewardItem><any>(this.getChild("heroExp"));
		this.m_rewardItem = <BaseRewardItem><any>(this.getChild("rewardItem"));
		
		
	}
}