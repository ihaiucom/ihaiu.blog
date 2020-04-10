/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp from "../../Extends/GameWarUI/EnemyHp";

export default class EnemyHpStruct extends fgui.GComponent
{
	public m_tiao : fgui.GImage;
	public m_hp : fgui.GImage;

	
	public static URL:string = "ui://rfow21emk5yz1v";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyHp {
		return <EnemyHp><any>(fgui.UIPackage.createObject("GameWarUI","EnemyHp"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_tiao = <fgui.GImage><any>(this.getChild("tiao"));
		this.m_hp = <fgui.GImage><any>(this.getChild("hp"));
		
		
	}
}