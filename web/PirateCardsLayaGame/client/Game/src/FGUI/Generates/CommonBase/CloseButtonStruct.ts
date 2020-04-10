/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";

export default class CloseButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicvpjn1m";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CloseButton {
		return <CloseButton><any>(fgui.UIPackage.createObject("CommonBase","CloseButton"));
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