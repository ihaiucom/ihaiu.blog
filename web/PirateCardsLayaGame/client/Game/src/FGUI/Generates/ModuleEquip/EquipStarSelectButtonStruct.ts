/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarSelectButton from "../../Extends/ModuleEquip/EquipStarSelectButton";

export default class EquipStarSelectButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://1oxl19poi4xy2f";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipStarSelectButton {
		return <EquipStarSelectButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStarSelectButton"));
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