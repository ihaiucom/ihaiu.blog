/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoTab from "../../Extends/GamePlayerInfoUI/GamePlayerInfoTab";

export default class GamePlayerInfoTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0lzv91";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonBase"];

	
	public static createInstance():GamePlayerInfoTab {
		return <GamePlayerInfoTab><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoTab"));
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