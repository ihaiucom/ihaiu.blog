/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarPos from "../../Extends/CommonGame/HeroStarPos";
import AddButton from "../../Extends/CommonBase/AddButton";
import HeroDetialView from "../../Extends/ModuleHero/HeroDetialView";
import HeroInfoView from "../../Extends/ModuleHero/HeroInfoView";

export default class HeroInfoViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_hero : fgui.GLoader;
	public m_list : fgui.GList;
	public m_name : fgui.GTextField;
	public m_typeIcon : fgui.GLoader;
	public m_labelItemName : fgui.GTextField;
	public m_labelNum : fgui.GTextField;
	public m_star : HeroStarPos;
	public m_btnAdd : AddButton;
	public m_detialView : HeroDetialView;

	
	public static URL:string = "ui://lxpvy4fwujzg1a";
	
	public static DependPackages:string[] = ["ModuleHero","CommonGame","CommonBase"];

	
	public static createInstance():HeroInfoView {
		return <HeroInfoView><any>(fgui.UIPackage.createObject("ModuleHero","HeroInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_quality = this.getController("quality");

		
		this.m_hero = <fgui.GLoader><any>(this.getChild("hero"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_typeIcon = <fgui.GLoader><any>(this.getChild("typeIcon"));
		this.m_labelItemName = <fgui.GTextField><any>(this.getChild("labelItemName"));
		this.m_labelNum = <fgui.GTextField><any>(this.getChild("labelNum"));
		this.m_star = <HeroStarPos><any>(this.getChild("star"));
		this.m_btnAdd = <AddButton><any>(this.getChild("btnAdd"));
		this.m_detialView = <HeroDetialView><any>(this.getChild("detialView"));
		
		
	}
}