/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipQualitySelectBtn from "../../Extends/ModuleEquip/EquipQualitySelectBtn";
import EquipQulitySelectItem from "../../Extends/ModuleEquip/EquipQulitySelectItem";

export default class EquipQulitySelectItemStruct extends fgui.GComponent
{
	public m_color : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_btn : EquipQualitySelectBtn;

	
	public static URL:string = "ui://1oxl19pon0w1a";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipQulitySelectItem {
		return <EquipQulitySelectItem><any>(fgui.UIPackage.createObject("ModuleEquip","EquipQulitySelectItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_btn = <EquipQualitySelectBtn><any>(this.getChild("btn"));
		
		
	}
}