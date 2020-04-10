/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import EquipIconButton from "../../Extends/ModuleEquip/EquipIconButton";

export default class EquipIconButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_qualityState : fgui.Controller;
	public m_quality : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_labelLevel : fgui.GTextField;
	public m_star : EquipStarPos;

	
	public static URL:string = "ui://1oxl19pom7cz26";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipIconButton {
		return <EquipIconButton><any>(fgui.UIPackage.createObject("ModuleEquip","EquipIconButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_qualityState = this.getController("qualityState");

		
		this.m_quality = <fgui.GLoader><any>(this.getChild("quality"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_star = <EquipStarPos><any>(this.getChild("star"));
		
		
	}
}