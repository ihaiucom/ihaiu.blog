/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HelpButton from "../../Extends/CommonBase/HelpButton";

export default class HelpButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicvpjn1q";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():HelpButton {
		return <HelpButton><any>(fgui.UIPackage.createObject("CommonBase","HelpButton"));
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