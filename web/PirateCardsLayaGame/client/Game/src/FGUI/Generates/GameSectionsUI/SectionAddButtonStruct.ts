/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionAddButton from "../../Extends/GameSectionsUI/SectionAddButton";

export default class SectionAddButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://0ajdzfv8l03wz2l";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionAddButton {
		return <SectionAddButton><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionAddButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}