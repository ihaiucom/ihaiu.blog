/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameSectionTab from "../../Extends/GameSectionsUI/GameSectionTab";

export default class GameSectionTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://0ajdzfv8l03wz2e";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():GameSectionTab {
		return <GameSectionTab><any>(fgui.UIPackage.createObject("GameSectionsUI","GameSectionTab"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}