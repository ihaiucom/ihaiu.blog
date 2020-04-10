/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipDetialView from "../../Extends/ModuleEquip/EquipDetialView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import EquipSelectView from "../../Extends/ModuleEquip/EquipSelectView";
import EquipWindowUI from "../../Extends/ModuleEquip/EquipWindowUI";

export default class EquipWindowUIStruct extends fgui.GComponent
{
	public m_detialView : EquipDetialView;
	public m_head : WindowHead;
	public m_selectView : EquipSelectView;

	
	public static URL:string = "ui://1oxl19po6sh30";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase","CommonGame"];

	
	public static createInstance():EquipWindowUI {
		return <EquipWindowUI><any>(fgui.UIPackage.createObject("ModuleEquip","EquipWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_detialView = <EquipDetialView><any>(this.getChild("detialView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_selectView = <EquipSelectView><any>(this.getChild("selectView"));
		
		
	}
}