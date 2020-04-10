/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import HeroStarLeft from "../../Extends/ModuleHero/HeroStarLeft";
import MaxAddButton from "../../Extends/CommonBase/MaxAddButton";
import EquipItemButton from "../../Extends/ModuleEquip/EquipItemButton";
import HeroEquipItem from "../../Extends/ModuleHero/HeroEquipItem";

export default class HeroEquipItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_btnLv : CommonButton1;
	public m_star : HeroStarLeft;
	public m_btnAdd : MaxAddButton;
	public m_btnItem : EquipItemButton;

	
	public static URL:string = "ui://lxpvy4fwujzg1o";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase","ModuleEquip"];

	
	public static createInstance():HeroEquipItem {
		return <HeroEquipItem><any>(fgui.UIPackage.createObject("ModuleHero","HeroEquipItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_btnLv = <CommonButton1><any>(this.getChild("btnLv"));
		this.m_star = <HeroStarLeft><any>(this.getChild("star"));
		this.m_btnAdd = <MaxAddButton><any>(this.getChild("btnAdd"));
		this.m_btnItem = <EquipItemButton><any>(this.getChild("btnItem"));
		
		
	}
}