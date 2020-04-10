/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipTypeButtonList from "../../Extends/ModuleEquip/EquipTypeButtonList";

export default class EquipTypeButtonListStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_list : fgui.GList;
	public m_list2 : fgui.GList;

	
	public static URL:string = "ui://1oxl19poo5e6k";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipTypeButtonList {
		return <EquipTypeButtonList><any>(fgui.UIPackage.createObject("ModuleEquip","EquipTypeButtonList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_list2 = <fgui.GList><any>(this.getChild("list2"));
		
		
	}
}