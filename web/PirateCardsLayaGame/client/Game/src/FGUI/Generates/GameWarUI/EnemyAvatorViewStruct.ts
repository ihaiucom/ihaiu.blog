/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyAvatorView from "../../Extends/GameWarUI/EnemyAvatorView";

export default class EnemyAvatorViewStruct extends fgui.GComponent
{
	public m_otherHero : fgui.Controller;
	public m_imgAvatorOther : fgui.GLoader;
	public m_otherHPProgress : fgui.GProgressBar;
	public m_otherMPProgress : fgui.GProgressBar;

	
	public static URL:string = "ui://rfow21emkm82w75";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyAvatorView {
		return <EnemyAvatorView><any>(fgui.UIPackage.createObject("GameWarUI","EnemyAvatorView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_otherHero = this.getController("otherHero");

		
		this.m_imgAvatorOther = <fgui.GLoader><any>(this.getChild("imgAvatorOther"));
		this.m_otherHPProgress = <fgui.GProgressBar><any>(this.getChild("otherHPProgress"));
		this.m_otherMPProgress = <fgui.GProgressBar><any>(this.getChild("otherMPProgress"));
		
		
	}
}