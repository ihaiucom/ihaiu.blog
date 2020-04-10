/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import LoginWindowUI from "../../Extends/ModuleLogin/LoginWindowUI";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";
import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import AccountComboBox from "../../Extends/ModuleLogin/AccountComboBox";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import BulletinPanel from "../../Extends/ModuleLogin/BulletinPanel";
import WxPanel from "../../Extends/ModuleLogin/WxPanel";
import AccountShow from "../../Extends/ModuleLogin/AccountShow";
import ServerPanel from "../../Extends/ModuleLogin/ServerPanel";
import ServerItem from "../../Extends/ModuleLogin/ServerItem";
import CdkPanel from "../../Extends/ModuleLogin/CdkPanel";
import CdkInput from "../../Extends/ModuleLogin/CdkInput";
import CheckIDPanel from "../../Extends/ModuleLogin/CheckIDPanel";
import CommonDialogBg from "../../Extends/ModuleLogin/CommonDialogBg";
import BulletinItem from "../../Extends/ModuleLogin/BulletinItem";

export default class ModuleLoginBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(LoginWindowUI.URL, LoginWindowUI);
		bind(LoginPanel.URL, LoginPanel);
		bind(AccountInput.URL, AccountInput);
		bind(AccountComboBox.URL, AccountComboBox);
		bind(PasswordInput.URL, PasswordInput);
		bind(BulletinPanel.URL, BulletinPanel);
		bind(WxPanel.URL, WxPanel);
		bind(AccountShow.URL, AccountShow);
		bind(ServerPanel.URL, ServerPanel);
		bind(ServerItem.URL, ServerItem);
		bind(CdkPanel.URL, CdkPanel);
		bind(CdkInput.URL, CdkInput);
		bind(CheckIDPanel.URL, CheckIDPanel);
		bind(CommonDialogBg.URL, CommonDialogBg);
		bind(BulletinItem.URL, BulletinItem);
	}
}