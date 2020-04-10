/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipExpAddProgressBar from "../../Extends/CommonBase/EquipExpAddProgressBar";
import EquipExpProgressBar from "../../Extends/CommonBase/EquipExpProgressBar";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import EquipIconItemButton from "../../Extends/ModuleEquip/EquipIconItemButton";
import EquipStrengthenView from "../../Extends/ModuleEquip/EquipStrengthenView";

export default class EquipStrengthenViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_color : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_labelLevel : fgui.GTextField;
	public m_labelAddLevel : fgui.GTextField;
	public m_addSpr : fgui.GImage;
	public m_labelExp : fgui.GTextField;
	public m_labelAddExp : fgui.GTextField;
	public m_labelPropStr : fgui.GTextField;
	public m_propList : fgui.GList;
	public m_costIcon : fgui.GImage;
	public m_labelCost : fgui.GTextField;
	public m_progressAdd : EquipExpAddProgressBar;
	public m_progress : EquipExpProgressBar;
	public m_btnStrengthen : CommonButton1;
	public m_btnLevelUp : CommonButton1;
	public m_btnCancel : CommonButton1;
	public m_icon : EquipIconItemButton;

	
	public static URL:string = "ui://1oxl19pon0w16";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase","ModuleHero"];

	
	public static createInstance():EquipStrengthenView {
		return <EquipStrengthenView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStrengthenView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_color = this.getController("color");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_labelAddLevel = <fgui.GTextField><any>(this.getChild("labelAddLevel"));
		this.m_addSpr = <fgui.GImage><any>(this.getChild("addSpr"));
		this.m_labelExp = <fgui.GTextField><any>(this.getChild("labelExp"));
		this.m_labelAddExp = <fgui.GTextField><any>(this.getChild("labelAddExp"));
		this.m_labelPropStr = <fgui.GTextField><any>(this.getChild("labelPropStr"));
		this.m_propList = <fgui.GList><any>(this.getChild("propList"));
		this.m_costIcon = <fgui.GImage><any>(this.getChild("costIcon"));
		this.m_labelCost = <fgui.GTextField><any>(this.getChild("labelCost"));
		this.m_progressAdd = <EquipExpAddProgressBar><any>(this.getChild("progressAdd"));
		this.m_progress = <EquipExpProgressBar><any>(this.getChild("progress"));
		this.m_btnStrengthen = <CommonButton1><any>(this.getChild("btnStrengthen"));
		this.m_btnLevelUp = <CommonButton1><any>(this.getChild("btnLevelUp"));
		this.m_btnCancel = <CommonButton1><any>(this.getChild("btnCancel"));
		this.m_icon = <EquipIconItemButton><any>(this.getChild("icon"));
		
		
	}
}