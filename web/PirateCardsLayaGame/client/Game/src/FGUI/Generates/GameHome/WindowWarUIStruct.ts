/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import PanelPause from "../../Extends/GameHome/PanelPause";
import WindowWarUI from "../../Extends/GameHome/WindowWarUI";

export default class WindowWarUIStruct extends fgui.GComponent
{
	public m_bg : ScreenBG;
	public m_pausePanel : PanelPause;

	
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
		this.m_pausePanel = <PanelPause><any>(this.getChild("pausePanel"));
		
		
	}
}