/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelResult from "../../Extends/GameHome/PanelResult";

export default class PanelResultStruct extends fgui.GComponent
{
	public m_btnGroup : fgui.GGroup;
	public m_resultBg : fgui.GImage;
	public m_coinCurrent : fgui.GTextField;
	public m_coinMax : fgui.GTextField;
	public m_resultGroup : fgui.GGroup;
	public m_homeBtn : fgui.GButton;
	public m_playBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy9d";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelResult {
		return <PanelResult><any>(fgui.UIPackage.createObject("GameHome","PanelResult"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnGroup = <fgui.GGroup><any>(this.getChild("btnGroup"));
		this.m_resultBg = <fgui.GImage><any>(this.getChild("resultBg"));
		this.m_coinCurrent = <fgui.GTextField><any>(this.getChild("coinCurrent"));
		this.m_coinMax = <fgui.GTextField><any>(this.getChild("coinMax"));
		this.m_resultGroup = <fgui.GGroup><any>(this.getChild("resultGroup"));
		this.m_homeBtn = <fgui.GButton><any>(this.getChild("homeBtn"));
		this.m_playBtn = <fgui.GButton><any>(this.getChild("playBtn"));
		
		
	}
}