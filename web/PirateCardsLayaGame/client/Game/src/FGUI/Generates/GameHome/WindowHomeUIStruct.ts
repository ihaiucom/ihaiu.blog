/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";
import PanelChooseHero from "../../Extends/GameHome/PanelChooseHero";
import PanelShop from "../../Extends/GameHome/PanelShop";
import PanelChooseGameFormat from "../../Extends/GameHome/PanelChooseGameFormat";
import PanelResult from "../../Extends/GameHome/PanelResult";
import WindowHomeUI from "../../Extends/GameHome/WindowHomeUI";

export default class WindowHomeUIStruct extends fgui.GComponent
{
	public m_Tab : fgui.Controller;
	public m_bg : ScreenBG;
	public m_mainMenu : PanelMainMenu;
	public m_chooseHero : PanelChooseHero;
	public m_shop : PanelShop;
	public m_chooseGameFormat : PanelChooseGameFormat;
	public m_result : PanelResult;

	
	public static URL:string = "ui://moe42ygrsqzy8a";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():WindowHomeUI {
		return <WindowHomeUI><any>(fgui.UIPackage.createObject("GameHome","WindowHomeUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Tab = this.getController("Tab");

		
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_mainMenu = <PanelMainMenu><any>(this.getChild("mainMenu"));
		this.m_chooseHero = <PanelChooseHero><any>(this.getChild("chooseHero"));
		this.m_shop = <PanelShop><any>(this.getChild("shop"));
		this.m_chooseGameFormat = <PanelChooseGameFormat><any>(this.getChild("chooseGameFormat"));
		this.m_result = <PanelResult><any>(this.getChild("result"));
		
		
	}
}