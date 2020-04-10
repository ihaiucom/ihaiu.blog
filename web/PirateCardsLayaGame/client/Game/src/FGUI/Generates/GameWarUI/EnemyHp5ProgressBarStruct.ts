/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp5ProgressBar from "../../Extends/GameWarUI/EnemyHp5ProgressBar";

export default class EnemyHp5ProgressBarStruct extends fgui.GProgressBar
{
	public m_color : fgui.Controller;
	public m_bar111 : fgui.GLoader;
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://rfow21eme776w52";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp5ProgressBar {
		return <EnemyHp5ProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp5ProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_bar111 = <fgui.GLoader><any>(this.getChild("bar111"));
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}