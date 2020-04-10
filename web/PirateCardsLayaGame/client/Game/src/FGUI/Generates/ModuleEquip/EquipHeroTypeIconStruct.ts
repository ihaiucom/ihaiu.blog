/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipHeroTypeIcon from "../../Extends/ModuleEquip/EquipHeroTypeIcon";

export default class EquipHeroTypeIconStruct extends fgui.GComponent
{
	public m_typeIcon : fgui.GLoader;

	
	public static URL:string = "ui://1oxl19pop6kpe96";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipHeroTypeIcon {
		return <EquipHeroTypeIcon><any>(fgui.UIPackage.createObject("ModuleEquip","EquipHeroTypeIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_typeIcon = <fgui.GLoader><any>(this.getChild("typeIcon"));
		
		
	}
}