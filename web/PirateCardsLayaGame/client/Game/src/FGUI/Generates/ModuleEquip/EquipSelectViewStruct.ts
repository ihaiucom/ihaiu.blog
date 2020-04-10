/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipListView from "../../Extends/ModuleEquip/EquipListView";
import EquipTypeButtonList from "../../Extends/ModuleEquip/EquipTypeButtonList";
import EquipListSelectView from "../../Extends/ModuleEquip/EquipListSelectView";
import EquipSelectView from "../../Extends/ModuleEquip/EquipSelectView";

export default class EquipSelectViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_listView : EquipListView;
	public m_btnList : EquipTypeButtonList;
	public m_listSelectView : EquipListSelectView;

	
	public static URL:string = "ui://1oxl19poaei4g";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipSelectView {
		return <EquipSelectView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipSelectView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_listView = <EquipListView><any>(this.getChild("listView"));
		this.m_btnList = <EquipTypeButtonList><any>(this.getChild("btnList"));
		this.m_listSelectView = <EquipListSelectView><any>(this.getChild("listSelectView"));
		
		
	}
}