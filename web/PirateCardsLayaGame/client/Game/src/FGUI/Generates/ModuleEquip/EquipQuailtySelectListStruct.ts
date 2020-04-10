/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipQuailtySelectList from "../../Extends/ModuleEquip/EquipQuailtySelectList";

export default class EquipQuailtySelectListStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://1oxl19pon0w19";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipQuailtySelectList {
		return <EquipQuailtySelectList><any>(fgui.UIPackage.createObject("ModuleEquip","EquipQuailtySelectList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}