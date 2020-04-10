/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp6ProgressBar from "../../Extends/GameWarUI/EnemyHp6ProgressBar";

export default class EnemyHp6ProgressBarStruct extends fgui.GProgressBar
{
	public m_color : fgui.Controller;
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w53";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp6ProgressBar {
		return <EnemyHp6ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp6ProgressBar"));
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