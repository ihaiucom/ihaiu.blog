/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MainMenuBtnBar from "../../Extends/GameHome/MainMenuBtnBar";
import GetUserInfoBtn from "../../Extends/GameHome/GetUserInfoBtn";
import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";

export default class PanelMainMenuStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_menuLogo : fgui.GComponent;
	public m_btnBar : MainMenuBtnBar;
	public m_getUserInfoBtn : GetUserInfoBtn;

	
	public static URL:string = "ui://moe42ygrsqzy7q";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelMainMenu {
		return <PanelMainMenu><any>(fgui.UIPackage.createObject("GameHome","PanelMainMenu"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_menuLogo = <fgui.GComponent><any>(this.getChild("menuLogo"));
		this.m_btnBar = <MainMenuBtnBar><any>(this.getChild("btnBar"));
		this.m_getUserInfoBtn = <GetUserInfoBtn><any>(this.getChild("getUserInfoBtn"));
		
		
	}
}