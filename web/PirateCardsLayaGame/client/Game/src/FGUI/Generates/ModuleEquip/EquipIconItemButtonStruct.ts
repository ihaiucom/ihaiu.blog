/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import EquipIconItemButton from "../../Extends/ModuleEquip/EquipIconItemButton";

export default class EquipIconItemButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_state : fgui.Controller;
	public m_qualityState : fgui.Controller;
	public m_quality : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_labelLevel : fgui.GTextField;
	public m_laeblNum : fgui.GTextField;
	public m_star : EquipStarPos;

	
	public static URL:string = "ui://1oxl19poi4xy2c";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipIconItemButton {
		return <EquipIconItemButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipIconItemButton"));
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
		this.m_qualityState = this.getController("qualityState");

		
		this.m_quality = <fgui.GLoader><any>(this.getChild("quality"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_laeblNum = <fgui.GTextField><any>(this.getChild("laeblNum"));
		this.m_star = <EquipStarPos><any>(this.getChild("star"));
		
		
	}
}