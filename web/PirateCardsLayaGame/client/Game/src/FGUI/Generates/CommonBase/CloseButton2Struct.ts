/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton2 from "../../Extends/CommonBase/CloseButton2";

export default class CloseButton2Struct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicsd1b26";
	
	public static DependPackages:string[] = ["CommonBase","ModuleSecretLand"];

	
	public static createInstance():CloseButton2 {
		return <CloseButton2><any>(fgui.UIPackage.createObject("CommonBase","CloseButton2"));
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