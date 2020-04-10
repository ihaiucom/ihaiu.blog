/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroListView from "../../Extends/ModuleHero/HeroListView";
import HeroInfoView from "../../Extends/ModuleHero/HeroInfoView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import HeroWindowUI from "../../Extends/ModuleHero/HeroWindowUI";

export default class HeroWindowUIStruct extends fgui.GComponent
{
	public m_ViewState : fgui.Controller;
	public m_listView : HeroListView;
	public m_infoView : HeroInfoView;
	public m_head : WindowHead;

	
	public static URL:string = "ui://lxpvy4fwsdar0";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase","CommonGame"];

	
	public static createInstance():HeroWindowUI {
		return <HeroWindowUI><any>(fgui.UIPackage.createObject("ModuleHero","HeroWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_ViewState = this.getController("ViewState");

		
		this.m_listView = <HeroListView><any>(this.getChild("listView"));
		this.m_infoView = <HeroInfoView><any>(this.getChild("infoView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		
		
	}
}