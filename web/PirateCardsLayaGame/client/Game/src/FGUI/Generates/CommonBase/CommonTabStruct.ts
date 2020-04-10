/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonTab from "../../Extends/CommonBase/CommonTab";

export default class CommonTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicqovk2";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonTab {
		return <CommonTab><any>(fgui.UIPackage.createObject("CommonBase","CommonTab"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}