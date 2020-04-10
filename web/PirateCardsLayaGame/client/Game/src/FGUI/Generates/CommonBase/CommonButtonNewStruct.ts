/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButtonNew from "../../Extends/CommonBase/CommonButtonNew";

export default class CommonButtonNewStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_View : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicinki25";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButtonNew {
		return <CommonButtonNew><any>(fgui.UIPackage.createObject("CommonBase","CommonButtonNew"));
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