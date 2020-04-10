/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomPlayerItem from "../../Extends/GameMatchUI/RoomPlayerItem";

export default class RoomPlayerItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_labPlayerName : fgui.GTextField;

	
	public static URL:string = "ui://axwa07kx10h6w17";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():RoomPlayerItem {
		return <RoomPlayerItem><any>(fgui.UIPackage.createObject("GameMatchUI","RoomPlayerItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_labPlayerName = <fgui.GTextField><any>(this.getChild("labPlayerName"));
		
		
	}
}