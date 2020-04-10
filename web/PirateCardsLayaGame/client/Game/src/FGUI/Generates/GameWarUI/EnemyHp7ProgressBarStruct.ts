/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp7ProgressBar from "../../Extends/GameWarUI/EnemyHp7ProgressBar";

export default class EnemyHp7ProgressBarStruct extends fgui.GProgressBar
{
	public m_color : fgui.Controller;
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w54";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp7ProgressBar {
		return <EnemyHp7ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp7ProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}