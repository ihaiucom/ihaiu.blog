/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroView from "../../Extends/GameWar3DUI/HeroView";

export default class HeroViewStruct extends fgui.GComponent
{
	public m_listHero : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_progressMP : fgui.GProgressBar;
	public m_progressHP : fgui.GProgressBar;
	public m_btnSetting : fgui.GButton;

	
	public static URL:string = "ui://yhpe9txzl0dc25";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():HeroView {
		return <HeroView><any>(fgui.UIPackage.createObject("GameWar3DUI","HeroView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listHero = <fgui.GList><any>(this.getChild("listHero"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_progressMP = <fgui.GProgressBar><any>(this.getChild("progressMP"));
		this.m_progressHP = <fgui.GProgressBar><any>(this.getChild("progressHP"));
		this.m_btnSetting = <fgui.GButton><any>(this.getChild("btnSetting"));
		
		
	}
}