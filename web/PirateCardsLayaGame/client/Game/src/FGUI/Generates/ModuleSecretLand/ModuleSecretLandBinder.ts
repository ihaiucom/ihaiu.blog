/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import SecretLandWindowUI from "../../Extends/ModuleSecretLand/SecretLandWindowUI";
import SecretLandAffixWindowUI from "../../Extends/ModuleSecretLand/SecretLandAffixWindowUI";
import SecretLandAffixListItem from "../../Extends/ModuleSecretLand/SecretLandAffixListItem";
import SecretLandAffixSubListItem from "../../Extends/ModuleSecretLand/SecretLandAffixSubListItem";
import SecretLandReadyWindowUI from "../../Extends/ModuleSecretLand/SecretLandReadyWindowUI";
import SecretLandCommonButton from "../../Extends/ModuleSecretLand/SecretLandCommonButton";
import SecretLandBoxButton from "../../Extends/ModuleSecretLand/SecretLandBoxButton";
import SecretLandTeamButton from "../../Extends/ModuleSecretLand/SecretLandTeamButton";
import SecretLandBestScore from "../../Extends/ModuleSecretLand/SecretLandBestScore";
import SecretLandRollWindowUI from "../../Extends/ModuleSecretLand/SecretLandRollWindowUI";
import SecretLandRollView from "../../Extends/ModuleSecretLand/SecretLandRollView";
import SecretLandStartBtn from "../../Extends/ModuleSecretLand/SecretLandStartBtn";
import SecretLandReadyTitle from "../../Extends/ModuleSecretLand/SecretLandReadyTitle";
import SecretLandReadyLevel from "../../Extends/ModuleSecretLand/SecretLandReadyLevel";
import SecretLandReadytime from "../../Extends/ModuleSecretLand/SecretLandReadytime";
import SecretLandReadyLock from "../../Extends/ModuleSecretLand/SecretLandReadyLock";
import SecretLandReadyStart from "../../Extends/ModuleSecretLand/SecretLandReadyStart";
import SecretLandReadyDigit from "../../Extends/ModuleSecretLand/SecretLandReadyDigit";
import SecretLandWeekReward from "../../Extends/ModuleSecretLand/SecretLandWeekReward";
import Background from "../../Extends/ModuleSecretLand/Background";

export default class ModuleSecretLandBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(SecretLandWindowUI.URL, SecretLandWindowUI);
		bind(SecretLandAffixWindowUI.URL, SecretLandAffixWindowUI);
		bind(SecretLandAffixListItem.URL, SecretLandAffixListItem);
		bind(SecretLandAffixSubListItem.URL, SecretLandAffixSubListItem);
		bind(SecretLandReadyWindowUI.URL, SecretLandReadyWindowUI);
		bind(SecretLandCommonButton.URL, SecretLandCommonButton);
		bind(SecretLandBoxButton.URL, SecretLandBoxButton);
		bind(SecretLandTeamButton.URL, SecretLandTeamButton);
		bind(SecretLandBestScore.URL, SecretLandBestScore);
		bind(SecretLandRollWindowUI.URL, SecretLandRollWindowUI);
		bind(SecretLandRollView.URL, SecretLandRollView);
		bind(SecretLandStartBtn.URL, SecretLandStartBtn);
		bind(SecretLandReadyTitle.URL, SecretLandReadyTitle);
		bind(SecretLandReadyLevel.URL, SecretLandReadyLevel);
		bind(SecretLandReadytime.URL, SecretLandReadytime);
		bind(SecretLandReadyLock.URL, SecretLandReadyLock);
		bind(SecretLandReadyStart.URL, SecretLandReadyStart);
		bind(SecretLandReadyDigit.URL, SecretLandReadyDigit);
		bind(SecretLandWeekReward.URL, SecretLandWeekReward);
		bind(Background.URL, Background);
	}
}