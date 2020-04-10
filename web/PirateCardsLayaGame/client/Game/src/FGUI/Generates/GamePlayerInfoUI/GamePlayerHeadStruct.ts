/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerHead from "../../Extends/GamePlayerInfoUI/GamePlayerHead";

export default class GamePlayerHeadStruct extends fgui.GButton
{
	public m_isGet : fgui.Controller;
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0eg2lv";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerHead {
		return <GamePlayerHead><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerHead"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isGet = this.getController("isGet");
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}