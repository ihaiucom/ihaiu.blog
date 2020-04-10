/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipDialogListView from "../../Extends/ModuleEquip/EquipDialogListView";

export default class EquipDialogListViewStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://1oxl19pop6kpe97";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipDialogListView {
		return <EquipDialogListView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipDialogListView"));
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