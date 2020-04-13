/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelChooseHero from "../../Extends/GameHome/PanelChooseHero";

export default class PanelChooseHeroStruct extends fgui.GComponent
{
	public m_btnGroup : fgui.GGroup;
	public m_heroGroup : fgui.GGroup;
	public m_menuTopPanel : fgui.GComponent;
	public m_playBtn : fgui.GButton;
	public m_plusBtn : fgui.GButton;
	public m_nextHeroBtn : fgui.GButton;
	public m_prevHeroBtn : fgui.GButton;
	public m_choiceHero : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy89";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelChooseHero {
		return <PanelChooseHero><any>(fgui.UIPackage.createObject("GameHome","PanelChooseHero"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnGroup = <fgui.GGroup><any>(this.getChild("btnGroup"));
		this.m_heroGroup = <fgui.GGroup><any>(this.getChild("heroGroup"));
		this.m_menuTopPanel = <fgui.GComponent><any>(this.getChild("menuTopPanel"));
		this.m_playBtn = <fgui.GButton><any>(this.getChild("playBtn"));
		this.m_plusBtn = <fgui.GButton><any>(this.getChild("plusBtn"));
		this.m_nextHeroBtn = <fgui.GButton><any>(this.getChild("nextHeroBtn"));
		this.m_prevHeroBtn = <fgui.GButton><any>(this.getChild("prevHeroBtn"));
		this.m_choiceHero = <fgui.GComponent><any>(this.getChild("choiceHero"));
		
		
	}
}