/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InfoView from "../../Extends/GameWar3DUI/InfoView";
import EnemyView from "../../Extends/GameWar3DUI/EnemyView";
import MonsterHpBossView from "../../Extends/GameWar3DUI/MonsterHpBossView";
import MonsterHpView from "../../Extends/GameWar3DUI/MonsterHpView";
import JoystickView from "../../Extends/GameWar3DUI/JoystickView";
import TeamInfoView from "../../Extends/GameWar3DUI/TeamInfoView";
import HeroView from "../../Extends/GameWar3DUI/HeroView";
import SkillView from "../../Extends/GameWar3DUI/SkillView";
import BossView from "../../Extends/GameWar3DUI/BossView";
import Effect_13001_fade from "../../Extends/Effect_13001_fade/Effect_13001_fade";
import Effect_1001_Dianguanglongqi_Skin1__Skill4_13 from "../../Extends/Effect_1001_Dianguanglongqi_Skin1__Skill4_13/Effect_1001_Dianguanglongqi_Skin1__Skill4_13";
import EffectView from "../../Extends/GameWar3DUI/EffectView";
import SettingView from "../../Extends/GameWar3DUI/SettingView";
import GoStepView from "../../Extends/GameWar3DUI/GoStepView";
import BossBornShowView from "../../Extends/GameWar3DUI/BossBornShowView";
import ReviveView from "../../Extends/GameWar3DUI/ReviveView";
import War3DWindowUI from "../../Extends/GameWar3DUI/War3DWindowUI";

export default class War3DWindowUIStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_Team : fgui.Controller;
	public m_infoView : InfoView;
	public m_enemyView : EnemyView;
	public m_finalBossHpView : MonsterHpBossView;
	public m_monsterHpView : MonsterHpView;
	public m_joystickView : JoystickView;
	public m_teamInfo : TeamInfoView;
	public m_heroView : HeroView;
	public m_skillView : SkillView;
	public m_SMonsterView : BossView;
	public m_fadeEffect : Effect_13001_fade;
	public m_finalSkillView : Effect_1001_Dianguanglongqi_Skin1__Skill4_13;
	public m_effectView : EffectView;
	public m_BossView : BossView;
	public m_settingView : SettingView;
	public m_goStepView : GoStepView;
	public m_BossShowBornView : BossBornShowView;
	public m_ReviveView : ReviveView;

	
	public static URL:string = "ui://yhpe9txzl0dc0";
	
	public static DependPackages:string[] = ["GameWar3DUI","Effect_13001_fade","Effect_1001_Dianguanglongqi_Skin1__Skill4_13","Effect_1002_Zhanji_Skin1__Skill4_13","Effect_13002_321go","Effect_13003_dijiangjipo","CommonBase"];

	
	public static createInstance():War3DWindowUI {
		return <War3DWindowUI><any>(fgui.UIPackage.createObject("GameWar3DUI","War3DWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");
		this.m_Team = this.getController("Team");

		
		this.m_infoView = <InfoView><any>(this.getChild("infoView"));
		this.m_enemyView = <EnemyView><any>(this.getChild("enemyView"));
		this.m_finalBossHpView = <MonsterHpBossView><any>(this.getChild("finalBossHpView"));
		this.m_monsterHpView = <MonsterHpView><any>(this.getChild("monsterHpView"));
		this.m_joystickView = <JoystickView><any>(this.getChild("joystickView"));
		this.m_teamInfo = <TeamInfoView><any>(this.getChild("teamInfo"));
		this.m_heroView = <HeroView><any>(this.getChild("heroView"));
		this.m_skillView = <SkillView><any>(this.getChild("skillView"));
		this.m_SMonsterView = <BossView><any>(this.getChild("SMonsterView"));
		this.m_fadeEffect = <Effect_13001_fade><any>(this.getChild("fadeEffect"));
		this.m_finalSkillView = <Effect_1001_Dianguanglongqi_Skin1__Skill4_13><any>(this.getChild("finalSkillView"));
		this.m_effectView = <EffectView><any>(this.getChild("effectView"));
		this.m_BossView = <BossView><any>(this.getChild("BossView"));
		this.m_settingView = <SettingView><any>(this.getChild("settingView"));
		this.m_goStepView = <GoStepView><any>(this.getChild("goStepView"));
		this.m_BossShowBornView = <BossBornShowView><any>(this.getChild("BossShowBornView"));
		this.m_ReviveView = <ReviveView><any>(this.getChild("ReviveView"));
		
		
	}
}