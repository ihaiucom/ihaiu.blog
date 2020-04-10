/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipListView from "../../Extends/ModuleEquip/EquipListView";

export default class EquipListViewStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://1oxl19poaei4e";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipListView {
		return <EquipListView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipListView"));
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