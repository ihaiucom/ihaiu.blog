/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton5 from "../../Extends/CommonBase/CommonButton5";

export default class CommonButton5Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_IsGray : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdiccv0825";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton5 {
		return <CommonButton5><any>(fgui.UIPackage.createObject("CommonBase","CommonButton5"));
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