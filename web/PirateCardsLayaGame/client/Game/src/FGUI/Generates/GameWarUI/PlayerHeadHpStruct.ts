/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHeadHp from "../../Extends/GameWarUI/PlayerHeadHp";

export default class PlayerHeadHpStruct extends fgui.GComponent
{
	public m_tiao : fgui.GImage;
	public m_hp : fgui.GImage;

	
	public static URL:string = "ui://rfow21emk5yz1x";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PlayerHeadHp {
		return <PlayerHeadHp><any>(fgui.UIPackage.createObject("GameWarUI","PlayerHeadHp"));
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