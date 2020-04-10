/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamHeroInfoView from "../../Extends/GameWar3DUI/TeamHeroInfoView";

export default class TeamHeroInfoViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_isCapter : fgui.Controller;
	public m_isRunAway : fgui.Controller;
	public m_labName : fgui.GTextField;
	public m_imgHero : fgui.GLoader;
	public m_runAwayText : fgui.GTextField;
	public m_progressMP : fgui.GProgressBar;
	public m_progressHP : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzk8vb93";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():TeamHeroInfoView {
		return <TeamHeroInfoView><any>(fgui.UIPackage.createObject("GameWar3DUI","TeamHeroInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_isCapter = this.getController("isCapter");
		this.m_isRunAway = this.getController("isRunAway");

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		this.m_runAwayText = <fgui.GTextField><any>(this.getChild("runAwayText"));
		this.m_progressMP = <fgui.GProgressBar><any>(this.getChild("progressMP"));
		this.m_progressHP = <fgui.GProgressBar><any>(this.getChild("progressHP"));
		
		
	}
}