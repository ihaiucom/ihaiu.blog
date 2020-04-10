/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroPageLabel from "../../Extends/ModuleHero/HeroPageLabel";
import HeroBattleBtnView from "../../Extends/ModuleHero/HeroBattleBtnView";
import HeroListView from "../../Extends/ModuleHero/HeroListView";

export default class HeroListViewStruct extends fgui.GComponent
{
	public m_showState : fgui.Controller;
	public m_list : fgui.GList;
	public m_battleList : fgui.GList;
	public m_btnAtlas : fgui.GButton;
	public m_btnList : HeroPageLabel;
	public m_btnView : HeroBattleBtnView;

	
	public static URL:string = "ui://lxpvy4fwjnne20";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase"];

	
	public static createInstance():HeroListView {
		return <HeroListView><any>(fgui.UIPackage.createObject("ModuleHero","HeroListView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_showState = this.getController("showState");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_battleList = <fgui.GList><any>(this.getChild("battleList"));
		this.m_btnAtlas = <fgui.GButton><any>(this.getChild("btnAtlas"));
		this.m_btnList = <HeroPageLabel><any>(this.getChild("btnList"));
		this.m_btnView = <HeroBattleBtnView><any>(this.getChild("btnView"));
		
		
	}
}