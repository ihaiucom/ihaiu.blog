/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarPos from "../../Extends/ModuleEquip/EquipStarPos";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import EquipIconItemButton from "../../Extends/ModuleEquip/EquipIconItemButton";
import EquipStarSelectButton from "../../Extends/ModuleEquip/EquipStarSelectButton";
import EquipStarView from "../../Extends/ModuleEquip/EquipStarView";

export default class EquipStarViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_buffDescState : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_star0 : fgui.GImage;
	public m_propList : fgui.GList;
	public m_starCur : EquipStarPos;
	public m_starNew : EquipStarPos;
	public m_btnStar : CommonButton1;
	public m_btnSelect : EquipIconItemButton;
	public m_btnAdd : EquipStarSelectButton;
	public m_icon : EquipIconItemButton;

	
	public static URL:string = "ui://1oxl19pon0w1d";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase","ModuleHero"];

	
	public static createInstance():EquipStarView {
		return <EquipStarView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipStarView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_buffDescState = this.getController("buffDescState");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_star0 = <fgui.GImage><any>(this.getChild("star0"));
		this.m_propList = <fgui.GList><any>(this.getChild("propList"));
		this.m_starCur = <EquipStarPos><any>(this.getChild("starCur"));
		this.m_starNew = <EquipStarPos><any>(this.getChild("starNew"));
		this.m_btnStar = <CommonButton1><any>(this.getChild("btnStar"));
		this.m_btnSelect = <EquipIconItemButton><any>(this.getChild("btnSelect"));
		this.m_btnAdd = <EquipStarSelectButton><any>(this.getChild("btnAdd"));
		this.m_icon = <EquipIconItemButton><any>(this.getChild("icon"));
		
		
	}
}