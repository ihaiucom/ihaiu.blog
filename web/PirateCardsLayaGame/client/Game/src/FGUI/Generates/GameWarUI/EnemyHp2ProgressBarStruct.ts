/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp2ProgressBar from "../../Extends/GameWarUI/EnemyHp2ProgressBar";

export default class EnemyHp2ProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w4z";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp2ProgressBar {
		return <EnemyHp2ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp2ProgressBar"));
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