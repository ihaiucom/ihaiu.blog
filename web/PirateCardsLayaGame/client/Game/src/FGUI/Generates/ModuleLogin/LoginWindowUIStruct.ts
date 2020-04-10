/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";
import WxPanel from "../../Extends/ModuleLogin/WxPanel";
import CdkPanel from "../../Extends/ModuleLogin/CdkPanel";
import CheckIDPanel from "../../Extends/ModuleLogin/CheckIDPanel";
import BulletinPanel from "../../Extends/ModuleLogin/BulletinPanel";
import ServerPanel from "../../Extends/ModuleLogin/ServerPanel";
import LoginWindowUI from "../../Extends/ModuleLogin/LoginWindowUI";

export default class LoginWindowUIStruct extends fgui.GComponent
{
	public m_Show : fgui.Controller;
	public m_txt_resVer : fgui.GTextField;
	public m_txt_gamever : fgui.GTextField;
	public m_screenBG : ScreenBG;
	public m_loginPanel : LoginPanel;
	public m_wxPanel : WxPanel;
	public m_cdkPanel : CdkPanel;
	public m_panelCheckID : CheckIDPanel;
	public m_btnBulletin : fgui.GObject;
	public m_panelBulletin : BulletinPanel;
	public m_panelServer : ServerPanel;

	
	public static URL:string = "ui://4698ugpknz0c0";
	
	public static DependPackages:string[] = ["ModuleLogin","GameLaunch"];

	
	public static createInstance():LoginWindowUI {
		return <LoginWindowUI><any>(fgui.UIPackage.createObject("ModuleLogin","LoginWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Show = this.getController("Show");

		
		this.m_txt_resVer = <fgui.GTextField><any>(this.getChild("txt_resVer"));
		this.m_txt_gamever = <fgui.GTextField><any>(this.getChild("txt_gamever"));
		this.m_screenBG = <ScreenBG><any>(this.getChild("screenBG"));
		this.m_loginPanel = <LoginPanel><any>(this.getChild("loginPanel"));
		this.m_wxPanel = <WxPanel><any>(this.getChild("wxPanel"));
		this.m_cdkPanel = <CdkPanel><any>(this.getChild("cdkPanel"));
		this.m_panelCheckID = <CheckIDPanel><any>(this.getChild("panelCheckID"));
		this.m_btnBulletin = <fgui.GObject><any>(this.getChild("btnBulletin"));
		this.m_panelBulletin = <BulletinPanel><any>(this.getChild("panelBulletin"));
		this.m_panelServer = <ServerPanel><any>(this.getChild("panelServer"));
		
		
	}
}