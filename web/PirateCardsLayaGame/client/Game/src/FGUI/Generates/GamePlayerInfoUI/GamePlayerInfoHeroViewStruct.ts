/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonTabBtn from "../../Extends/CommonBase/CommonTabBtn";
import GamePlayerInfoHeroView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroView";

export default class GamePlayerInfoHeroViewStruct extends fgui.GComponent
{
	public m_tabList : fgui.Controller;
	public m_teamCount : fgui.Controller;
	public m_heroList : fgui.GList;
	public m_tab0 : CommonTabBtn;
	public m_tab1 : CommonTabBtn;
	public m_tab2 : CommonTabBtn;
	public m_tab3 : CommonTabBtn;

	
	public static URL:string = "ui://776a9nj0lzv93";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonBase"];

	
	public static createInstance():GamePlayerInfoHeroView {
		return <GamePlayerInfoHeroView><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoHeroView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tabList = this.getController("tabList");
		this.m_teamCount = this.getController("teamCount");

		
		this.m_heroList = <fgui.GList><any>(this.getChild("heroList"));
		this.m_tab0 = <CommonTabBtn><any>(this.getChild("tab0"));
		this.m_tab1 = <CommonTabBtn><any>(this.getChild("tab1"));
		this.m_tab2 = <CommonTabBtn><any>(this.getChild("tab2"));
		this.m_tab3 = <CommonTabBtn><any>(this.getChild("tab3"));
		
		
	}
}