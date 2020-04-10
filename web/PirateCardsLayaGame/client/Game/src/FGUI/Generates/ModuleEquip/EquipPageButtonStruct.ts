/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipPageButton from "../../Extends/ModuleEquip/EquipPageButton";

export default class EquipPageButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://1oxl19povg8ce90";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipPageButton {
		return <EquipPageButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipPageButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}