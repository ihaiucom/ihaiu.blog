/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton from "../../Extends/CommonBase/AddButton";

export default class AddButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicvpjn1b";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():AddButton {
		return <AddButton><any>(fgui.UIPackage.createObject("CommonBase","AddButton"));
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