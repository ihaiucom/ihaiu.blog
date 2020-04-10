/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoHeroListTab from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroListTab";

export default class GamePlayerInfoHeroListTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0lzv97";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","_ResImageUIV1"];

	
	public static createInstance():GamePlayerInfoHeroListTab {
		return <GamePlayerInfoHeroListTab><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoHeroListTab"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}