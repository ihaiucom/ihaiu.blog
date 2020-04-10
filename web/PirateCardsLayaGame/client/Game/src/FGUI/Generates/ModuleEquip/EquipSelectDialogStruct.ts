/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import EquipDialogListView from "../../Extends/ModuleEquip/EquipDialogListView";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import DialogHeadBig from "../../Extends/CommonGame/DialogHeadBig";
import EquipPageLabel from "../../Extends/ModuleEquip/EquipPageLabel";
import EquipHeroTypeList from "../../Extends/ModuleEquip/EquipHeroTypeList";
import EquipSelectDialog from "../../Extends/ModuleEquip/EquipSelectDialog";

export default class EquipSelectDialogStruct extends fgui.GComponent
{
	public m_equipState : fgui.Controller;
	public m_buffDescState : fgui.Controller;
	public m_have : fgui.Controller;
	public m_isOnly : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_labelOnly : fgui.GTextField;
	public m_proplist : fgui.GList;
	public m_frame : FrameView;
	public m_listView : EquipDialogListView;
	public m_btnSelect : CommonButton1;
	public m_head : DialogHeadBig;
	public m_btnList : EquipPageLabel;
	public m_heroType : EquipHeroTypeList;

	
	public static URL:string = "ui://1oxl19posm7dp";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase","CommonGame","ModuleHero"];

	
	public static createInstance():EquipSelectDialog {
		return <EquipSelectDialog><any>(fgui.UIPackage.createObject("ModuleEquip","EquipSelectDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_equipState = this.getController("equipState");
		this.m_buffDescState = this.getController("buffDescState");
		this.m_have = this.getController("have");
		this.m_isOnly = this.getController("isOnly");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_labelOnly = <fgui.GTextField><any>(this.getChild("labelOnly"));
		this.m_proplist = <fgui.GList><any>(this.getChild("proplist"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_listView = <EquipDialogListView><any>(this.getChild("listView"));
		this.m_btnSelect = <CommonButton1><any>(this.getChild("btnSelect"));
		this.m_head = <DialogHeadBig><any>(this.getChild("head"));
		this.m_btnList = <EquipPageLabel><any>(this.getChild("btnList"));
		this.m_heroType = <EquipHeroTypeList><any>(this.getChild("heroType"));
		
		
	}
}