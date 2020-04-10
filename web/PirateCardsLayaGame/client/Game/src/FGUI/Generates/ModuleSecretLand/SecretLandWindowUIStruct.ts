/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead2 from "../../Extends/CommonGame/WindowHead2";
import SecretLandTeamButton from "../../Extends/ModuleSecretLand/SecretLandTeamButton";
import SecretLandCommonButton from "../../Extends/ModuleSecretLand/SecretLandCommonButton";
import SecretLandBoxButton from "../../Extends/ModuleSecretLand/SecretLandBoxButton";
import SecretLandBestScore from "../../Extends/ModuleSecretLand/SecretLandBestScore";
import SecretLandWeekReward from "../../Extends/ModuleSecretLand/SecretLandWeekReward";
import SecretLandWindowUI from "../../Extends/ModuleSecretLand/SecretLandWindowUI";

export default class SecretLandWindowUIStruct extends fgui.GComponent
{
	public m_openWeekReward : fgui.Controller;
	public m_hasReward : fgui.Controller;
	public m_thisWeekList : fgui.GList;
	public m_nextWeekList : fgui.GList;
	public m_keystone : fgui.GTextField;
	public m_head : WindowHead2;
	public m_teamBtn : SecretLandTeamButton;
	public m_rankBtn : SecretLandCommonButton;
	public m_affixBtn : SecretLandCommonButton;
	public m_baseReward : SecretLandBoxButton;
	public m_bestScore : SecretLandBestScore;
	public m_weekRewardPanel : SecretLandWeekReward;

	
	public static URL:string = "ui://62v5hdr0j4ro0";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonGame","CommonBase","_ResImageUIV1"];

	
	public static createInstance():SecretLandWindowUI {
		return <SecretLandWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_openWeekReward = this.getController("openWeekReward");
		this.m_hasReward = this.getController("hasReward");

		
		this.m_thisWeekList = <fgui.GList><any>(this.getChild("thisWeekList"));
		this.m_nextWeekList = <fgui.GList><any>(this.getChild("nextWeekList"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_head = <WindowHead2><any>(this.getChild("head"));
		this.m_teamBtn = <SecretLandTeamButton><any>(this.getChild("teamBtn"));
		this.m_rankBtn = <SecretLandCommonButton><any>(this.getChild("rankBtn"));
		this.m_affixBtn = <SecretLandCommonButton><any>(this.getChild("affixBtn"));
		this.m_baseReward = <SecretLandBoxButton><any>(this.getChild("baseReward"));
		this.m_bestScore = <SecretLandBestScore><any>(this.getChild("bestScore"));
		this.m_weekRewardPanel = <SecretLandWeekReward><any>(this.getChild("weekRewardPanel"));
		
		
	}
}