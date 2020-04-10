/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyView from "../../Extends/GameWar3DUI/EnemyView";

export default class EnemyViewStruct extends fgui.GComponent
{
	public m_listHero : fgui.GList;
	public m_labLevel : fgui.GTextField;
	public m_labName : fgui.GTextField;
	public m_progressHP : fgui.GProgressBar;
	public m_progressMP : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzb3sf3g";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():EnemyView {
		return <EnemyView><any>(fgui.UIPackage.createObject("GameWar3DUI","EnemyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listHero = <fgui.GList><any>(this.getChild("listHero"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_progressHP = <fgui.GProgressBar><any>(this.getChild("progressHP"));
		this.m_progressMP = <fgui.GProgressBar><any>(this.getChild("progressMP"));
		
		
	}
}