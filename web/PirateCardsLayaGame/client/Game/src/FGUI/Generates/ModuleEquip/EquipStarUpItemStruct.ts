/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipIconItemButtonSmall from "../../Extends/ModuleEquip/EquipIconItemButtonSmall";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import EquipStarUpItem from "../../Extends/ModuleEquip/EquipStarUpItem";

export default class EquipStarUpItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_showState : fgui.Controller;
	public m_titleColor : fgui.Controller;
	public m_labelName : fgui.GTextField;
	public m_labelDesc1 : fgui.GTextField;
	public m_labelDesc2 : fgui.GTextField;
	public m_labelNotEnough : fgui.GTextField;
	public m_title : fgui.GTextField;
	public m_icon : EquipIconItemButtonSmall;
	public m_btnSelect : CommonButton1;

	
	public static URL:string = "ui://1oxl19podyyro";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipStarUpItem {
		return <EquipStarUpItem><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStarUpItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_showState = this.getController("showState");
		this.m_titleColor = this.getController("titleColor");

		
		this.m_labelName = <fgui.GTextField><any>(this.getChild("labelName"));
		this.m_labelDesc1 = <fgui.GTextField><any>(this.getChild("labelDesc1"));
		this.m_labelDesc2 = <fgui.GTextField><any>(this.getChild("labelDesc2"));
		this.m_labelNotEnough = <fgui.GTextField><any>(this.getChild("labelNotEnough"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <EquipIconItemButtonSmall><any>(this.getChild("icon"));
		this.m_btnSelect = <CommonButton1><any>(this.getChild("btnSelect"));
		
		
	}
}