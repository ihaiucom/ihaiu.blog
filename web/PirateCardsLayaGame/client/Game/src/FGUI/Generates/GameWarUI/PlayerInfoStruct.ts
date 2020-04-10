/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerInfo from "../../Extends/GameWarUI/PlayerInfo";

export default class PlayerInfoStruct extends fgui.GComponent
{
	public m_playerName : fgui.GTextField;

	
	public static URL:string = "ui://rfow21emk5yz1w";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PlayerInfo {
		return <PlayerInfo><any>(fgui.UIPackage.createObject("GameWarUI","PlayerInfo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_playerName = <fgui.GTextField><any>(this.getChild("playerName"));
		
		
	}
}