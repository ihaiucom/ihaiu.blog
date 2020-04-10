/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton6 from "../../Extends/CommonBase/CommonButton6";

export default class CommonButton6Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_View : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicsd1b27";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton6 {
		return <CommonButton6><any>(fgui.UIPackage.createObject("CommonBase","CommonButton6"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_View = this.getController("View");

		
		
		
	}
}