/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";

export default class EquipStarPosStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;
	public m_starPos : fgui.Controller;
	public m_4 : fgui.GImage;
	public m_3 : fgui.GImage;
	public m_1 : fgui.GImage;
	public m_2 : fgui.GImage;
	public m_5 : fgui.GImage;

	
	public static URL:string = "ui://1oxl19pom7cz2b";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipStarPos {
		return <EquipStarPos><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStarPos"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");
		this.m_starPos = this.getController("starPos");

		
		this.m_4 = <fgui.GImage><any>(this.getChild("4"));
		this.m_3 = <fgui.GImage><any>(this.getChild("3"));
		this.m_1 = <fgui.GImage><any>(this.getChild("1"));
		this.m_2 = <fgui.GImage><any>(this.getChild("2"));
		this.m_5 = <fgui.GImage><any>(this.getChild("5"));
		
		
	}
}