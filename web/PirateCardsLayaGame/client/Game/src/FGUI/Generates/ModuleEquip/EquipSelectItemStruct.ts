/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import EquipQualitySelectBtn from "../../Extends/ModuleEquip/EquipQualitySelectBtn";
import EquipSelectItem from "../../Extends/ModuleEquip/EquipSelectItem";

export default class EquipSelectItemStruct extends fgui.GComponent
{
	public m_qualityState : fgui.Controller;
	public m_quality : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_labelLevel : fgui.GTextField;
	public m_star : EquipStarPos;
	public m_btn : EquipQualitySelectBtn;

	
	public static URL:string = "ui://1oxl19poi4xy36";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipSelectItem {
		return <EquipSelectItem><any>(fgui.UIPackage.createObject("ModuleEquip","EquipSelectItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_qualityState = this.getController("qualityState");

		
		this.m_quality = <fgui.GLoader><any>(this.getChild("quality"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_star = <EquipStarPos><any>(this.getChild("star"));
		this.m_btn = <EquipQualitySelectBtn><any>(this.getChild("btn"));
		
		
	}
}