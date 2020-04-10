/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import WarWindowUI from "../../Extends/GameWarUI/WarWindowUI";
import JoystickView from "../../Extends/GameWarUI/JoystickView";
import SkillContralView from "../../Extends/GameWarUI/SkillContralView";
import CoolProgressBar from "../../Extends/GameWarUI/CoolProgressBar";
import AvatorView from "../../Extends/GameWarUI/AvatorView";
import NormalNumber from "../../Extends/GameWarUI/NormalNumber";
import CritNumber from "../../Extends/GameWarUI/CritNumber";
import HitNumber from "../../Extends/GameWarUI/HitNumber";
import EnemyHp from "../../Extends/GameWarUI/EnemyHp";
import PlayerInfo from "../../Extends/GameWarUI/PlayerInfo";
import PlayerHeadHp from "../../Extends/GameWarUI/PlayerHeadHp";
import SkillButton from "../../Extends/GameWarUI/SkillButton";
import EnemyView from "../../Extends/GameWarUI/EnemyView";
import EnemyHp1ProgressBar from "../../Extends/GameWarUI/EnemyHp1ProgressBar";
import PauseButton from "../../Extends/GameWarUI/PauseButton";
import SelfBattleButton from "../../Extends/GameWarUI/SelfBattleButton";
import LevelInfoView from "../../Extends/GameWarUI/LevelInfoView";
import InfoIyem from "../../Extends/GameWarUI/InfoIyem";
import PauseView from "../../Extends/GameWarUI/PauseView";
import PlayerHP from "../../Extends/GameWarUI/PlayerHP";
import P2vP2View from "../../Extends/GameWarUI/P2vP2View";
import PvPView from "../../Extends/GameWarUI/PvPView";
import EnemyHp2ProgressBar from "../../Extends/GameWarUI/EnemyHp2ProgressBar";
import EnemyHp3ProgressBar from "../../Extends/GameWarUI/EnemyHp3ProgressBar";
import EnemyHp4ProgressBar from "../../Extends/GameWarUI/EnemyHp4ProgressBar";
import EnemyHp5ProgressBar from "../../Extends/GameWarUI/EnemyHp5ProgressBar";
import EnemyHp6ProgressBar from "../../Extends/GameWarUI/EnemyHp6ProgressBar";
import EnemyHp7ProgressBar from "../../Extends/GameWarUI/EnemyHp7ProgressBar";
import Effects_SkillButtonGlow from "../../Extends/GameWarUI/Effects_SkillButtonGlow";
import P2vP2HPProgressBar from "../../Extends/GameWarUI/P2vP2HPProgressBar";
import EnemyAvatorView from "../../Extends/GameWarUI/EnemyAvatorView";
import EnemyTeamView from "../../Extends/GameWarUI/EnemyTeamView";
import GoStepView from "../../Extends/GameWarUI/GoStepView";
import PvEView from "../../Extends/GameWarUI/PvEView";

export default class GameWarUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(WarWindowUI.URL, WarWindowUI);
		bind(JoystickView.URL, JoystickView);
		bind(SkillContralView.URL, SkillContralView);
		bind(CoolProgressBar.URL, CoolProgressBar);
		bind(AvatorView.URL, AvatorView);
		bind(NormalNumber.URL, NormalNumber);
		bind(CritNumber.URL, CritNumber);
		bind(HitNumber.URL, HitNumber);
		bind(EnemyHp.URL, EnemyHp);
		bind(PlayerInfo.URL, PlayerInfo);
		bind(PlayerHeadHp.URL, PlayerHeadHp);
		bind(SkillButton.URL, SkillButton);
		bind(EnemyView.URL, EnemyView);
		bind(EnemyHp1ProgressBar.URL, EnemyHp1ProgressBar);
		bind(PauseButton.URL, PauseButton);
		bind(SelfBattleButton.URL, SelfBattleButton);
		bind(LevelInfoView.URL, LevelInfoView);
		bind(InfoIyem.URL, InfoIyem);
		bind(PauseView.URL, PauseView);
		bind(PlayerHP.URL, PlayerHP);
		bind(P2vP2View.URL, P2vP2View);
		bind(PvPView.URL, PvPView);
		bind(EnemyHp2ProgressBar.URL, EnemyHp2ProgressBar);
		bind(EnemyHp3ProgressBar.URL, EnemyHp3ProgressBar);
		bind(EnemyHp4ProgressBar.URL, EnemyHp4ProgressBar);
		bind(EnemyHp5ProgressBar.URL, EnemyHp5ProgressBar);
		bind(EnemyHp6ProgressBar.URL, EnemyHp6ProgressBar);
		bind(EnemyHp7ProgressBar.URL, EnemyHp7ProgressBar);
		bind(Effects_SkillButtonGlow.URL, Effects_SkillButtonGlow);
		bind(P2vP2HPProgressBar.URL, P2vP2HPProgressBar);
		bind(EnemyAvatorView.URL, EnemyAvatorView);
		bind(EnemyTeamView.URL, EnemyTeamView);
		bind(GoStepView.URL, GoStepView);
		bind(PvEView.URL, PvEView);
	}
}