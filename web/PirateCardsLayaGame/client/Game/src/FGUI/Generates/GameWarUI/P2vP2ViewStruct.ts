/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AvatorView from "../../Extends/GameWarUI/AvatorView";
import EnemyTeamView from "../../Extends/GameWarUI/EnemyTeamView";
import P2vP2View from "../../Extends/GameWarUI/P2vP2View";

export default class P2vP2ViewStruct extends fgui.GComponent
{
	public m_avatorView : AvatorView;
	public m_enemyView : EnemyTeamView;

	
	public static URL:string = "ui://rfow21em10h6w4t";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():P2vP2View {
		return <P2vP2View><any>(fgui.UIPackage.createObject("GameWarUI","P2vP2View"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_avatorView = <AvatorView><any>(this.getChild("avatorView"));
		this.m_enemyView = <EnemyTeamView><any>(this.getChild("enemyView"));
		
		
	}
}