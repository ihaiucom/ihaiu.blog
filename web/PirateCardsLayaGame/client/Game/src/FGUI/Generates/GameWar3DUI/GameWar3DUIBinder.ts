/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import War3DWindowUI from "../../Extends/GameWar3DUI/War3DWindowUI";
import HeroView from "../../Extends/GameWar3DUI/HeroView";
import HeroButton from "../../Extends/GameWar3DUI/HeroButton";
import BuffItem from "../../Extends/GameWar3DUI/BuffItem";
import InfoView from "../../Extends/GameWar3DUI/InfoView";
import BossView from "../../Extends/GameWar3DUI/BossView";
import EnemyView from "../../Extends/GameWar3DUI/EnemyView";
import JoystickView from "../../Extends/GameWar3DUI/JoystickView";
import SkillView from "../../Extends/GameWar3DUI/SkillView";
import SkillNormalButton from "../../Extends/GameWar3DUI/SkillNormalButton";
import SkillSmallButton from "../../Extends/GameWar3DUI/SkillSmallButton";
import Openskill from "../../Extends/GameWar3DUI/Openskill";
import FuryEffect from "../../Extends/GameWar3DUI/FuryEffect";
import NormalDamageNumber from "../../Extends/GameWar3DUI/NormalDamageNumber";
import CritDamageNumber from "../../Extends/GameWar3DUI/CritDamageNumber";
import HitNumber from "../../Extends/GameWar3DUI/HitNumber";
import MissDamageNumber from "../../Extends/GameWar3DUI/MissDamageNumber";
import HeadHPView from "../../Extends/GameWar3DUI/HeadHPView";
import SettingView from "../../Extends/GameWar3DUI/SettingView";
import GoStepView from "../../Extends/GameWar3DUI/GoStepView";
import SkillFinalButton from "../../Extends/GameWar3DUI/SkillFinalButton";
import SkillCommonButton from "../../Extends/GameWar3DUI/SkillCommonButton";
import MonsterButton from "../../Extends/GameWar3DUI/MonsterButton";
import EffectView from "../../Extends/GameWar3DUI/EffectView";
import TeamHeroInfoView from "../../Extends/GameWar3DUI/TeamHeroInfoView";
import TeamInfoView from "../../Extends/GameWar3DUI/TeamInfoView";
import Btn_teamList from "../../Extends/GameWar3DUI/Btn_teamList";
import Com_DamagePanel from "../../Extends/GameWar3DUI/Com_DamagePanel";
import DamageBar from "../../Extends/GameWar3DUI/DamageBar";
import Com_DamageBar from "../../Extends/GameWar3DUI/Com_DamageBar";
import HitNumberList from "../../Extends/GameWar3DUI/HitNumberList";
import MonsterHpView from "../../Extends/GameWar3DUI/MonsterHpView";
import MonsterShortHp from "../../Extends/GameWar3DUI/MonsterShortHp";
import MonsterLongHp from "../../Extends/GameWar3DUI/MonsterLongHp";
import MonsterMidHp from "../../Extends/GameWar3DUI/MonsterMidHp";
import MonsterHpBossView from "../../Extends/GameWar3DUI/MonsterHpBossView";
import BossBornShowView from "../../Extends/GameWar3DUI/BossBornShowView";
import DongZhuoShowCom from "../../Extends/GameWar3DUI/DongZhuoShowCom";
import SecretBattleView from "../../Extends/GameWar3DUI/SecretBattleView";
import ReviveView from "../../Extends/GameWar3DUI/ReviveView";
import OtherPlayerReviveView from "../../Extends/GameWar3DUI/OtherPlayerReviveView";

export default class GameWar3DUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(War3DWindowUI.URL, War3DWindowUI);
		bind(HeroView.URL, HeroView);
		bind(HeroButton.URL, HeroButton);
		bind(BuffItem.URL, BuffItem);
		bind(InfoView.URL, InfoView);
		bind(BossView.URL, BossView);
		bind(EnemyView.URL, EnemyView);
		bind(JoystickView.URL, JoystickView);
		bind(SkillView.URL, SkillView);
		bind(SkillNormalButton.URL, SkillNormalButton);
		bind(SkillSmallButton.URL, SkillSmallButton);
		bind(Openskill.URL, Openskill);
		bind(FuryEffect.URL, FuryEffect);
		bind(NormalDamageNumber.URL, NormalDamageNumber);
		bind(CritDamageNumber.URL, CritDamageNumber);
		bind(HitNumber.URL, HitNumber);
		bind(MissDamageNumber.URL, MissDamageNumber);
		bind(HeadHPView.URL, HeadHPView);
		bind(SettingView.URL, SettingView);
		bind(GoStepView.URL, GoStepView);
		bind(SkillFinalButton.URL, SkillFinalButton);
		bind(SkillCommonButton.URL, SkillCommonButton);
		bind(MonsterButton.URL, MonsterButton);
		bind(EffectView.URL, EffectView);
		bind(TeamHeroInfoView.URL, TeamHeroInfoView);
		bind(TeamInfoView.URL, TeamInfoView);
		bind(Btn_teamList.URL, Btn_teamList);
		bind(Com_DamagePanel.URL, Com_DamagePanel);
		bind(DamageBar.URL, DamageBar);
		bind(Com_DamageBar.URL, Com_DamageBar);
		bind(HitNumberList.URL, HitNumberList);
		bind(MonsterHpView.URL, MonsterHpView);
		bind(MonsterShortHp.URL, MonsterShortHp);
		bind(MonsterLongHp.URL, MonsterLongHp);
		bind(MonsterMidHp.URL, MonsterMidHp);
		bind(MonsterHpBossView.URL, MonsterHpBossView);
		bind(BossBornShowView.URL, BossBornShowView);
		bind(DongZhuoShowCom.URL, DongZhuoShowCom);
		bind(SecretBattleView.URL, SecretBattleView);
		bind(ReviveView.URL, ReviveView);
		bind(OtherPlayerReviveView.URL, OtherPlayerReviveView);
	}
}