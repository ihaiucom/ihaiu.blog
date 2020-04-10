/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton3 from "../../Extends/CommonBase/CommonButton3";

export default class CommonButton3Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicv18i24";
	
	public static DependPackages:string[] = ["CommonBase","CommonGame"];

	
	public static createInstance():CommonButton3 {
		return <CommonButton3><any>(fgui.UIPackage.createObject("CommonBase","CommonButton3"));
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