/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";
import FatigueItem from "../../Extends/CommonGame/FatigueItem";
import MissionCondition from "../../Extends/GameSectionsUI/MissionCondition";
import SectionViewMonsterItem from "../../Extends/GameSectionsUI/SectionViewMonsterItem";
import SectionSpecialItem from "../../Extends/GameSectionsUI/SectionSpecialItem";
import NormalSectionItem from "../../Extends/GameSectionsUI/NormalSectionItem";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import SectionSweepViewPanel from "../../Extends/CommonGame/SectionSweepViewPanel";
import SectionDetailUI from "../../Extends/GameSectionsUI/SectionDetailUI";

export default class SectionDetailUIStruct extends fgui.GComponent
{
	public m_missionType : fgui.Controller;
	public m_isSweep : fgui.Controller;
	public m_background : fgui.GLoader;
	public m_rewardList : fgui.GList;
	public m_teamBtn : CommonButton1;
	public m_challengeBtn : CommonButton1;
	public m_sweepBtn : CommonButton1;
	public m_baseItem2 : BaseRewardItem;
	public m_baseItem1 : BaseRewardItem;
	public m_baseItem0 : BaseRewardItem;
	public m_stamina : FatigueItem;
	public m_condition1 : MissionCondition;
	public m_condition2 : MissionCondition;
	public m_condition3 : MissionCondition;
	public m_monsterItem : SectionViewMonsterItem;
	public m_specialItemOld : SectionSpecialItem;
	public m_specialItem : NormalSectionItem;
	public m_normalItem : NormalSectionItem;
	public m_head : WindowHead;
	public m_sweepView : SectionSweepViewPanel;

	
	public static URL:string = "ui://0ajdzfv8ro8jz2n";
	
	public static DependPackages:string[] = ["GameSectionsUI","CommonGame","CommonBase"];

	
	public static createInstance():SectionDetailUI {
		return <SectionDetailUI><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionDetailUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_missionType = this.getController("missionType");
		this.m_isSweep = this.getController("isSweep");

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_rewardList = <fgui.GList><any>(this.getChild("rewardList"));
		this.m_teamBtn = <CommonButton1><any>(this.getChild("teamBtn"));
		this.m_challengeBtn = <CommonButton1><any>(this.getChild("challengeBtn"));
		this.m_sweepBtn = <CommonButton1><any>(this.getChild("sweepBtn"));
		this.m_baseItem2 = <BaseRewardItem><any>(this.getChild("baseItem2"));
		this.m_baseItem1 = <BaseRewardItem><any>(this.getChild("baseItem1"));
		this.m_baseItem0 = <BaseRewardItem><any>(this.getChild("baseItem0"));
		this.m_stamina = <FatigueItem><any>(this.getChild("stamina"));
		this.m_condition1 = <MissionCondition><any>(this.getChild("condition1"));
		this.m_condition2 = <MissionCondition><any>(this.getChild("condition2"));
		this.m_condition3 = <MissionCondition><any>(this.getChild("condition3"));
		this.m_monsterItem = <SectionViewMonsterItem><any>(this.getChild("monsterItem"));
		this.m_specialItemOld = <SectionSpecialItem><any>(this.getChild("specialItemOld"));
		this.m_specialItem = <NormalSectionItem><any>(this.getChild("specialItem"));
		this.m_normalItem = <NormalSectionItem><any>(this.getChild("normalItem"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_sweepView = <SectionSweepViewPanel><any>(this.getChild("sweepView"));
		
		
	}
}