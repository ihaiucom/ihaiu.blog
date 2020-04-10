/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton2 from "../../Extends/CommonBase/CommonButton2";

export default class CommonButton2Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdiclu8a1v";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton2 {
		return <CommonButton2><any>(fgui.UIPackage.createObject("CommonBase","CommonButton2"));
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