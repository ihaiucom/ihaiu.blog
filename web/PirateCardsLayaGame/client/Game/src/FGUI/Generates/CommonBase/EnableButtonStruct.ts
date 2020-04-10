/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnableButton from "../../Extends/CommonBase/EnableButton";

export default class EnableButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicudxsi";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():EnableButton {
		return <EnableButton><any>(fgui.UIPackage.createObject("CommonBase","EnableButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}