/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import EquipIconButtonSmall from "../../Extends/ModuleEquip/EquipIconButtonSmall";

export default class EquipIconButtonSmallStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_qualityState : fgui.Controller;
	public m_maskState : fgui.Controller;
	public m_quality : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_labelLevel : fgui.GTextField;
	public m_heroIconBg : fgui.GImage;
	public m_heroIcon : fgui.GLoader;
	public m_star : EquipStarPos;

	
	public static URL:string = "ui://1oxl19poi4xy2j";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipIconButtonSmall {
		return <EquipIconButtonSmall><any>(fgui.UIPackage.createObject("ModuleEquip","EquipIconButtonSmall"));
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
		this.m_maskState = this.getController("maskState");

		
		this.m_quality = <fgui.GLoader><any>(this.getChild("quality"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_heroIconBg = <fgui.GImage><any>(this.getChild("heroIconBg"));
		this.m_heroIcon = <fgui.GLoader><any>(this.getChild("heroIcon"));
		this.m_star = <EquipStarPos><any>(this.getChild("star"));
		
		
	}
}