/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TouziButton from "../../Extends/CommonBase/TouziButton";

export default class TouziButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdiceg2l21";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():TouziButton {
		return <TouziButton><any>(fgui.UIPackage.createObject("CommonBase","touziButton"));
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