/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PauseButton from "../../Extends/GameWarUI/PauseButton";

export default class PauseButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://rfow21emi78t48";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PauseButton {
		return <PauseButton><any>(fgui.UIPackage.createObject("GameWarUI","PauseButton"));
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