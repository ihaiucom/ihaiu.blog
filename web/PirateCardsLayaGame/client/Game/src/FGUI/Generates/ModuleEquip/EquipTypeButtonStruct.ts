/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipTypeButton from "../../Extends/ModuleEquip/EquipTypeButton";

export default class EquipTypeButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_iconState : fgui.Controller;

	
	public static URL:string = "ui://1oxl19poi4xy2n";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipTypeButton {
		return <EquipTypeButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipTypeButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_iconState = this.getController("iconState");

		
		
		
	}
}