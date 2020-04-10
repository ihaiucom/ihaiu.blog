/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipPageLabel from "../../Extends/ModuleEquip/EquipPageLabel";

export default class EquipPageLabelStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://1oxl19povg8ce8z";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipPageLabel {
		return <EquipPageLabel><any>(fgui.UIPackage.createObject("ModuleEquip","EquipPageLabel"));
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