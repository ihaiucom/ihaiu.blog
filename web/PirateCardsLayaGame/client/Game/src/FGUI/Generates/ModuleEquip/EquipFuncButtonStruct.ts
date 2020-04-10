/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipFuncButton from "../../Extends/ModuleEquip/EquipFuncButton";

export default class EquipFuncButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_iconState : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://1oxl19pohhs522";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipFuncButton {
		return <EquipFuncButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipFuncButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_iconState = this.getController("iconState");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}