/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomItem from "../../Extends/GameMatchUI/RoomItem";

export default class RoomItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_type : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://axwa07kxi3ez12";
	
	public static DependPackages:string[] = ["GameMatchUI","_ResImageUIV1"];

	
	public static createInstance():RoomItem {
		return <RoomItem><any>(fgui.UIPackage.createObject("GameMatchUI","RoomItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_type = this.getController("type");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}