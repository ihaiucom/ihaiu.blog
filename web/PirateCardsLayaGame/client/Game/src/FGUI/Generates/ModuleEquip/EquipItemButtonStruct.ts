/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipItemButton from "../../Extends/ModuleEquip/EquipItemButton";

export default class EquipItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_qualityBg : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_labQuality : fgui.GTextField;

	
	public static URL:string = "ui://1oxl19poudruw";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipItemButton {
		return <EquipItemButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipItemButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_quality = this.getController("quality");

		
		this.m_qualityBg = <fgui.GLoader><any>(this.getChild("qualityBg"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labQuality = <fgui.GTextField><any>(this.getChild("labQuality"));
		
		
	}
}