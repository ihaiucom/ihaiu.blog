/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SwitchChpaterButton from "../../Extends/GameSectionsUI/SwitchChpaterButton";

export default class SwitchChpaterButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://0ajdzfv8l03wz2h";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SwitchChpaterButton {
		return <SwitchChpaterButton><any>(fgui.UIPackage.createObject("GameSectionsUI","SwitchChpaterButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		
		
	}
}