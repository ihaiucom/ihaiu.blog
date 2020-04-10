/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import EquipStarUpItem from "../../Extends/ModuleEquip/EquipStarUpItem";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import EquipStarUpDialog from "../../Extends/ModuleEquip/EquipStarUpDialog";

export default class EquipStarUpDialogStruct extends fgui.GComponent
{
	public m_frame : FrameView;
	public m_equip : EquipStarUpItem;
	public m_item : EquipStarUpItem;
	public m_btnClose : CloseButton;

	
	public static URL:string = "ui://1oxl19podyyrn";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipStarUpDialog {
		return <EquipStarUpDialog><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStarUpDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_equip = <EquipStarUpItem><any>(this.getChild("equip"));
		this.m_item = <EquipStarUpItem><any>(this.getChild("item"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		
		
	}
}