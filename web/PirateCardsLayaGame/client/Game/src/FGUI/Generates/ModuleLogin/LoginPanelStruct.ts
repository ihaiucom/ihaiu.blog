/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";

export default class LoginPanelStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_accountInput : AccountInput;
	public m_passwordInput : PasswordInput;
	public m_btn_login : fgui.GButton;
	public m_btn_offLine : fgui.GObject;
	public m_btn_randomLogin : fgui.GObject;
	public m_btn_testWar : fgui.GObject;

	
	public static URL:string = "ui://4698ugpknz0c1g";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():LoginPanel {
		return <LoginPanel><any>(fgui.UIPackage.createObject("ModuleLogin","LoginPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_accountInput = <AccountInput><any>(this.getChild("accountInput"));
		this.m_passwordInput = <PasswordInput><any>(this.getChild("passwordInput"));
		this.m_btn_login = <fgui.GButton><any>(this.getChild("btn_login"));
		this.m_btn_offLine = <fgui.GObject><any>(this.getChild("btn_offLine"));
		this.m_btn_randomLogin = <fgui.GObject><any>(this.getChild("btn_randomLogin"));
		this.m_btn_testWar = <fgui.GObject><any>(this.getChild("btn_testWar"));
		
		
	}
}