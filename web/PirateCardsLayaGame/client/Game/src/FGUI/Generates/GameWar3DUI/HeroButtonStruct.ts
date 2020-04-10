/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroButton from "../../Extends/GameWar3DUI/HeroButton";

export default class HeroButtonStruct extends fgui.GButton
{
	public m_state : fgui.Controller;
	public m_button : fgui.Controller;
	public m_hero : fgui.Controller;
	public m_imgHero : fgui.GLoader;
	public m_labTime : fgui.GTextField;
	public m_effChange : fgui.GMovieClip;
	public m_progressCool : fgui.GProgressBar;
	public m_progressHP : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzl0dc26";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():HeroButton {
		return <HeroButton><any>(fgui.UIPackage.createObject("GameWar3DUI","HeroButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_button = this.getController("button");
		this.m_hero = this.getController("hero");

		
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_effChange = <fgui.GMovieClip><any>(this.getChild("effChange"));
		this.m_progressCool = <fgui.GProgressBar><any>(this.getChild("progressCool"));
		this.m_progressHP = <fgui.GProgressBar><any>(this.getChild("progressHP"));
		
		
	}
}