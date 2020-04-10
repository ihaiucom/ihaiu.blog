/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectQuality from "../../Extends/ModuleEquip/EquipSelectQuality";

export default class EquipSelectQualityStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://1oxl19poi4xy2p";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipSelectQuality {
		return <EquipSelectQuality><any>(fgui.UIPackage.createObject("ModuleEquip","EquipSelectQuality"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}