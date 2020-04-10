/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp4ProgressBar from "../../Extends/GameWarUI/EnemyHp4ProgressBar";

export default class EnemyHp4ProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w51";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp4ProgressBar {
		return <EnemyHp4ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp4ProgressBar"));
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