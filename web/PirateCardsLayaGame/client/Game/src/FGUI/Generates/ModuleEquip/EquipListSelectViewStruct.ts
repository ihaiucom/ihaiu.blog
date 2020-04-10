/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStrengthenOption from "../../Extends/ModuleEquip/EquipStrengthenOption";
import EquipListSelectView from "../../Extends/ModuleEquip/EquipListSelectView";

export default class EquipListSelectViewStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_topView : EquipStrengthenOption;

	
	public static URL:string = "ui://1oxl19poaei4f";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipListSelectView {
		return <EquipListSelectView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipListSelectView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_topView = <EquipStrengthenOption><any>(this.getChild("topView"));
		
		
	}
}