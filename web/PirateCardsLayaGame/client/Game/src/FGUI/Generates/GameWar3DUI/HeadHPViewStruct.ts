/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeadHPView from "../../Extends/GameWar3DUI/HeadHPView";

export default class HeadHPViewStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_reviveState : fgui.Controller;
	public m_preogressTeam : fgui.GProgressBar;
	public m_progressEnemy : fgui.GProgressBar;
	public m_progressBoss : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzfafh7e";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():HeadHPView {
		return <HeadHPView><any>(fgui.UIPackage.createObject("GameWar3DUI","HeadHPView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");
		this.m_reviveState = this.getController("reviveState");

		
		this.m_preogressTeam = <fgui.GProgressBar><any>(this.getChild("preogressTeam"));
		this.m_progressEnemy = <fgui.GProgressBar><any>(this.getChild("progressEnemy"));
		this.m_progressBoss = <fgui.GProgressBar><any>(this.getChild("progressBoss"));
		
		
	}
}