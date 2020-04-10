/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipProButton from "../../Extends/ModuleEquip/EquipProButton";

export default class EquipProButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_labelNum : fgui.GTextField;
	public m_labelAdd : fgui.GTextField;

	
	public static URL:string = "ui://1oxl19pohhs51z";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipProButton {
		return <EquipProButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipProButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_state = this.getController("state");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_labelNum = <fgui.GTextField><any>(this.getChild("labelNum"));
		this.m_labelAdd = <fgui.GTextField><any>(this.getChild("labelAdd"));
		
		
	}
}