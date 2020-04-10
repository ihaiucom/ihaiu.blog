/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AvatorView from "../../Extends/GameWarUI/AvatorView";
import EnemyAvatorView from "../../Extends/GameWarUI/EnemyAvatorView";
import PvPView from "../../Extends/GameWarUI/PvPView";

export default class PvPViewStruct extends fgui.GComponent
{
	public m_avatorView : AvatorView;
	public m_enemyView : EnemyAvatorView;

	
	public static URL:string = "ui://rfow21emagbvw4x";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PvPView {
		return <PvPView><any>(fgui.UIPackage.createObject("GameWarUI","PvPView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_avatorView = <AvatorView><any>(this.getChild("avatorView"));
		this.m_enemyView = <EnemyAvatorView><any>(this.getChild("enemyView"));
		
		
	}
}