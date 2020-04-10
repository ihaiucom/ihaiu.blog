/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipHeroTypeList from "../../Extends/ModuleEquip/EquipHeroTypeList";
import EquipBaseView from "../../Extends/ModuleEquip/EquipBaseView";

export default class EquipBaseViewStruct extends fgui.GComponent
{
	public m_buffDescState : fgui.Controller;
	public m_isOnly : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_proplist : fgui.GList;
	public m_labelDesc : fgui.GTextField;
	public m_labelOnly : fgui.GTextField;
	public m_heroType : EquipHeroTypeList;

	
	public static URL:string = "ui://1oxl19pon0w14";
	
	public static DependPackages:string[] = ["ModuleEquip","ModuleHero"];

	
	public static createInstance():EquipBaseView {
		return <EquipBaseView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipBaseView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_buffDescState = this.getController("buffDescState");
		this.m_isOnly = this.getController("isOnly");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_proplist = <fgui.GList><any>(this.getChild("proplist"));
		this.m_labelDesc = <fgui.GTextField><any>(this.getChild("labelDesc"));
		this.m_labelOnly = <fgui.GTextField><any>(this.getChild("labelOnly"));
		this.m_heroType = <EquipHeroTypeList><any>(this.getChild("heroType"));
		
		
	}
}