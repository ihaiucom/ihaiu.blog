/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2HPProgressBar from "../../Extends/GameWarUI/P2vP2HPProgressBar";
import EnemyTeamView from "../../Extends/GameWarUI/EnemyTeamView";

export default class EnemyTeamViewStruct extends fgui.GComponent
{
	public m_hero : fgui.Controller;
	public m_Player1HPProgress : P2vP2HPProgressBar;
	public m_Player2HPProgress : P2vP2HPProgressBar;
	public m_Player3HPProgress : P2vP2HPProgressBar;
	public m_Player4HPProgress : P2vP2HPProgressBar;

	
	public static URL:string = "ui://rfow21emkm82w76";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyTeamView {
		return <EnemyTeamView><any>(fgui.UIPackage.createObject("GameWarUI","EnemyTeamView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_hero = this.getController("hero");

		
		this.m_Player1HPProgress = <P2vP2HPProgressBar><any>(this.getChild("Player1HPProgress"));
		this.m_Player2HPProgress = <P2vP2HPProgressBar><any>(this.getChild("Player2HPProgress"));
		this.m_Player3HPProgress = <P2vP2HPProgressBar><any>(this.getChild("Player3HPProgress"));
		this.m_Player4HPProgress = <P2vP2HPProgressBar><any>(this.getChild("Player4HPProgress"));
		
		
	}
}