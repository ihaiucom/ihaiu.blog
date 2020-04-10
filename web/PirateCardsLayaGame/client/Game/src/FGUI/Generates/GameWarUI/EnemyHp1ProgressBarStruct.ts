/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp1ProgressBar from "../../Extends/GameWarUI/EnemyHp1ProgressBar";

export default class EnemyHp1ProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21emi78t47";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp1ProgressBar {
		return <EnemyHp1ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp1ProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}