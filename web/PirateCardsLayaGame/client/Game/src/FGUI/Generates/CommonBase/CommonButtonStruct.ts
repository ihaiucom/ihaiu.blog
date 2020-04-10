/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton from "../../Extends/CommonBase/CommonButton";

export default class CommonButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicqovk4";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton {
		return <CommonButton><any>(fgui.UIPackage.createObject("CommonBase","CommonButton"));
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