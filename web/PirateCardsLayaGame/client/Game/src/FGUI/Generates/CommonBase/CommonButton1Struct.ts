/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";

export default class CommonButton1Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_IsGray : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicj35s1s";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton1 {
		return <CommonButton1><any>(fgui.UIPackage.createObject("CommonBase","CommonButton1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_IsGray = this.getController("IsGray");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}