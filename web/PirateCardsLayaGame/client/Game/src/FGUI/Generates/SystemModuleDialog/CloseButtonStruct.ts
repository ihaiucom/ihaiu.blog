/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/SystemModuleDialog/CloseButton";

export default class CloseButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://q5yddivts0xqi";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():CloseButton {
		return <CloseButton><any>(fgui.UIPackage.createObject("SystemModuleDialog","CloseButton"));
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