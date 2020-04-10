/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp3ProgressBar from "../../Extends/GameWarUI/EnemyHp3ProgressBar";

export default class EnemyHp3ProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w50";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp3ProgressBar {
		return <EnemyHp3ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp3ProgressBar"));
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