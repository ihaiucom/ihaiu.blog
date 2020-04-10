/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import EquipQuailtySelectList from "../../Extends/ModuleEquip/EquipQuailtySelectList";
import EquipSelectQuality from "../../Extends/ModuleEquip/EquipSelectQuality";
import EquipTopButton from "../../Extends/ModuleEquip/EquipTopButton";
import EquipStrengthenOption from "../../Extends/ModuleEquip/EquipStrengthenOption";

export default class EquipStrengthenOptionStruct extends fgui.GComponent
{
	public m_buttonState : fgui.Controller;
	public m_frame : FrameView;
	public m_listItem : EquipQuailtySelectList;
	public m_btnSelect : EquipSelectQuality;
	public m_btnSort : EquipTopButton;

	
	public static URL:string = "ui://1oxl19pon0w18";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipStrengthenOption {
		return <EquipStrengthenOption><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStrengthenOption"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_buttonState = this.getController("buttonState");

		
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_listItem = <EquipQuailtySelectList><any>(this.getChild("listItem"));
		this.m_btnSelect = <EquipSelectQuality><any>(this.getChild("btnSelect"));
		this.m_btnSort = <EquipTopButton><any>(this.getChild("btnSort"));
		
		
	}
}