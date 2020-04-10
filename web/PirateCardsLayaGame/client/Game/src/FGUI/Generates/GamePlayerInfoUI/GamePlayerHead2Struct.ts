/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerHead2 from "../../Extends/GamePlayerInfoUI/GamePlayerHead2";

export default class GamePlayerHead2Struct extends fgui.GButton
{
	public m_isGet : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_level : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0eg2ly";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI"];

	
	public static createInstance():GamePlayerHead2 {
		return <GamePlayerHead2><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerHead2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isGet = this.getController("isGet");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		
		
	}
}