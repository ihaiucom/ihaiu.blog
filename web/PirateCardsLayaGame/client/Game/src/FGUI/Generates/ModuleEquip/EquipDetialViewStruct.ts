/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipBaseView from "../../Extends/ModuleEquip/EquipBaseView";
import EquipStrengthenView from "../../Extends/ModuleEquip/EquipStrengthenView";
import EquipStarView from "../../Extends/ModuleEquip/EquipStarView";
import EquipFuncButton from "../../Extends/ModuleEquip/EquipFuncButton";
import EquipDetialView from "../../Extends/ModuleEquip/EquipDetialView";

export default class EquipDetialViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_baseView : EquipBaseView;
	public m_strengthenView : EquipStrengthenView;
	public m_starView : EquipStarView;
	public m_btnBase : EquipFuncButton;
	public m_btnNew : EquipFuncButton;
	public m_btnStar : EquipFuncButton;
	public m_btnStrengthen : EquipFuncButton;

	
	public static URL:string = "ui://1oxl19poaei4h";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipDetialView {
		return <EquipDetialView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipDetialView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_baseView = <EquipBaseView><any>(this.getChild("baseView"));
		this.m_strengthenView = <EquipStrengthenView><any>(this.getChild("strengthenView"));
		this.m_starView = <EquipStarView><any>(this.getChild("starView"));
		this.m_btnBase = <EquipFuncButton><any>(this.getChild("btnBase"));
		this.m_btnNew = <EquipFuncButton><any>(this.getChild("btnNew"));
		this.m_btnStar = <EquipFuncButton><any>(this.getChild("btnStar"));
		this.m_btnStrengthen = <EquipFuncButton><any>(this.getChild("btnStrengthen"));
		
		
	}
}