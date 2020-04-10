/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipTopButton from "../../Extends/ModuleEquip/EquipTopButton";

export default class EquipTopButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_sort : fgui.Controller;

	
	public static URL:string = "ui://1oxl19poi4xy2q";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipTopButton {
		return <EquipTopButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipTopButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_sort = this.getController("sort");

		
		
		
	}
}