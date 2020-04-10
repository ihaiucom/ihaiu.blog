/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipQualitySelectBtn from "../../Extends/ModuleEquip/EquipQualitySelectBtn";

export default class EquipQualitySelectBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://1oxl19pon0w1c";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipQualitySelectBtn {
		return <EquipQualitySelectBtn><any>(fgui.UIPackage.createObject("ModuleEquip","EquipQualitySelectBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}