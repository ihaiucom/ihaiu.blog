/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookDetailBg from "../../Extends/ModuleSecretBook/SecretBookDetailBg";
import SecretBookButton from "../../Extends/ModuleSecretBook/SecretBookButton";
import BaseRewardItem2 from "../../Extends/CommonGame/BaseRewardItem2";
import SecretBookListItem from "../../Extends/ModuleSecretBook/SecretBookListItem";
import FatigueItem from "../../Extends/CommonGame/FatigueItem";
import SecretBookCondition from "../../Extends/ModuleSecretBook/SecretBookCondition";
import SectionSweepViewPanel from "../../Extends/CommonGame/SectionSweepViewPanel";
import SecretBookDetailWindowUI from "../../Extends/ModuleSecretBook/SecretBookDetailWindowUI";

export default class SecretBookDetailWindowUIStruct extends fgui.GComponent
{
	public m_isSweep : fgui.Controller;
	public m_rewardList : fgui.GList;
	public m_background : SecretBookDetailBg;
	public m_challengeBtn : SecretBookButton;
	public m_sweepBtn : SecretBookButton;
	public m_baseItem0 : BaseRewardItem2;
	public m_baseItem1 : BaseRewardItem2;
	public m_baseItem2 : BaseRewardItem2;
	public m_missionItem : SecretBookListItem;
	public m_stamina : FatigueItem;
	public m_condition1 : SecretBookCondition;
	public m_condition2 : SecretBookCondition;
	public m_condition3 : SecretBookCondition;
	public m_sweepView : SectionSweepViewPanel;

	
	public static URL:string = "ui://dmgf4euxsjrp6";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonBase","CommonGame"];

	
	public static createInstance():SecretBookDetailWindowUI {
		return <SecretBookDetailWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookDetailWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isSweep = this.getController("isSweep");

		
		this.m_rewardList = <fgui.GList><any>(this.getChild("rewardList"));
		this.m_background = <SecretBookDetailBg><any>(this.getChild("background"));
		this.m_challengeBtn = <SecretBookButton><any>(this.getChild("challengeBtn"));
		this.m_sweepBtn = <SecretBookButton><any>(this.getChild("sweepBtn"));
		this.m_baseItem0 = <BaseRewardItem2><any>(this.getChild("baseItem0"));
		this.m_baseItem1 = <BaseRewardItem2><any>(this.getChild("baseItem1"));
		this.m_baseItem2 = <BaseRewardItem2><any>(this.getChild("baseItem2"));
		this.m_missionItem = <SecretBookListItem><any>(this.getChild("missionItem"));
		this.m_stamina = <FatigueItem><any>(this.getChild("stamina"));
		this.m_condition1 = <SecretBookCondition><any>(this.getChild("condition1"));
		this.m_condition2 = <SecretBookCondition><any>(this.getChild("condition2"));
		this.m_condition3 = <SecretBookCondition><any>(this.getChild("condition3"));
		this.m_sweepView = <SectionSweepViewPanel><any>(this.getChild("sweepView"));
		
		
	}
}