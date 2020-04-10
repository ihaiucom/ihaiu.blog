/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AvatorView from "../../Extends/GameWarUI/AvatorView";
import EnemyView from "../../Extends/GameWarUI/EnemyView";
import PvEView from "../../Extends/GameWarUI/PvEView";

export default class PvEViewStruct extends fgui.GComponent
{
	public m_avatorView : AvatorView;
	public m_enemyView : EnemyView;

	
	public static URL:string = "ui://rfow21emgj1fw7c";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PvEView {
		return <PvEView><any>(fgui.UIPackage.createObject("GameWarUI","PvEView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_avatorView = <AvatorView><any>(this.getChild("avatorView"));
		this.m_enemyView = <EnemyView><any>(this.getChild("enemyView"));
		
		
	}
}