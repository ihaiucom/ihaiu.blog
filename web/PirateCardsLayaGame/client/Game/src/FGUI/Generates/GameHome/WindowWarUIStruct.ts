/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import MenuTopPanelWar from "../../Extends/GameHome/MenuTopPanelWar";
import Container from "../../Extends/GameHome/Container";
import WindowWarUI from "../../Extends/GameHome/WindowWarUI";

export default class WindowWarUIStruct extends fgui.GComponent
{
	public m_bg : ScreenBG;
	public m_menuTopPanel : MenuTopPanelWar;
	public m_container : Container;

	
	public static URL:string = "ui://moe42ygrsqzy9c";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():WindowWarUI {
		return <WindowWarUI><any>(fgui.UIPackage.createObject("GameHome","WindowWarUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_menuTopPanel = <MenuTopPanelWar><any>(this.getChild("menuTopPanel"));
		this.m_container = <Container><any>(this.getChild("container"));
		
		
	}
}