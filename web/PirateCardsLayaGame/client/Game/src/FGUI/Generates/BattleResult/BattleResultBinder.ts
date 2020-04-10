/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import BattleResultWindowUI from "../../Extends/BattleResult/BattleResultWindowUI";
import BattleWinComponent from "../../Extends/BattleResult/BattleWinComponent";
import BattleFaildComponent from "../../Extends/BattleResult/BattleFaildComponent";
import BattleResultCondition from "../../Extends/BattleResult/BattleResultCondition";
import PVEBattleResultView from "../../Extends/BattleResult/PVEBattleResultView";
import PVPBattleResultView from "../../Extends/BattleResult/PVPBattleResultView";
import BattleResultModuleButton from "../../Extends/BattleResult/BattleResultModuleButton";
import SecretLandBattleResultView from "../../Extends/BattleResult/SecretLandBattleResultView";
import SecretLandFail from "../../Extends/BattleResult/SecretLandFail";
import SecretLandWin from "../../Extends/BattleResult/SecretLandWin";
import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";
import BattleResultSecretLandPanel from "../../Extends/BattleResult/BattleResultSecretLandPanel";
import BattleResultSecretLandPanel2 from "../../Extends/BattleResult/BattleResultSecretLandPanel2";
import SecretLandPanel from "../../Extends/BattleResult/SecretLandPanel";
import SecretLandExitButton from "../../Extends/BattleResult/SecretLandExitButton";
import BattleResultBoxItem from "../../Extends/BattleResult/BattleResultBoxItem";

export default class BattleResultBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(BattleResultWindowUI.URL, BattleResultWindowUI);
		bind(BattleWinComponent.URL, BattleWinComponent);
		bind(BattleFaildComponent.URL, BattleFaildComponent);
		bind(BattleResultCondition.URL, BattleResultCondition);
		bind(PVEBattleResultView.URL, PVEBattleResultView);
		bind(PVPBattleResultView.URL, PVPBattleResultView);
		bind(BattleResultModuleButton.URL, BattleResultModuleButton);
		bind(SecretLandBattleResultView.URL, SecretLandBattleResultView);
		bind(SecretLandFail.URL, SecretLandFail);
		bind(SecretLandWin.URL, SecretLandWin);
		bind(BattleResultSecretBox.URL, BattleResultSecretBox);
		bind(BattleResultSecretLandPanel.URL, BattleResultSecretLandPanel);
		bind(BattleResultSecretLandPanel2.URL, BattleResultSecretLandPanel2);
		bind(SecretLandPanel.URL, SecretLandPanel);
		bind(SecretLandExitButton.URL, SecretLandExitButton);
		bind(BattleResultBoxItem.URL, BattleResultBoxItem);
	}
}