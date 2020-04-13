/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import LogoView from "../../Extends/GameLaunch/LogoView";
import PanelPause from "../../Extends/GameHome/PanelPause";

export default class PanelPauseStruct extends fgui.GComponent
{
	public m_btnGroup : fgui.GGroup;
	public m_bg : ScreenBG;
	public m_logo : LogoView;
	public m_homeBtn : fgui.GButton;
	public m_soundBtn : fgui.GComponent;
	public m_resumeBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy9a";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():PanelPause {
		return <PanelPause><any>(fgui.UIPackage.createObject("GameHome","PanelPause"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnGroup = <fgui.GGroup><any>(this.getChild("btnGroup"));
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_logo = <LogoView><any>(this.getChild("logo"));
		this.m_homeBtn = <fgui.GButton><any>(this.getChild("homeBtn"));
		this.m_soundBtn = <fgui.GComponent><any>(this.getChild("soundBtn"));
		this.m_resumeBtn = <fgui.GButton><any>(this.getChild("resumeBtn"));
		
		
	}
}