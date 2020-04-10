/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";

export default class EmptyButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicjbnha";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():EmptyButton {
		return <EmptyButton><any>(fgui.UIPackage.createObject("CommonBase","EmptyButton"));
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