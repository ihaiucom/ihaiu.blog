/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipHeroTypeList from "../../Extends/ModuleEquip/EquipHeroTypeList";

export default class EquipHeroTypeListStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://1oxl19pop6kpe95";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipHeroTypeList {
		return <EquipHeroTypeList><any>(fgui.UIPackage.createObject("ModuleEquip","EquipHeroTypeList"));
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