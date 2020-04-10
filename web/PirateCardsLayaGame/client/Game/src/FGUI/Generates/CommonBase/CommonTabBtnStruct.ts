/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonTabBtn from "../../Extends/CommonBase/CommonTabBtn";

export default class CommonTabBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdiceg2l22";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonTabBtn {
		return <CommonTabBtn><any>(fgui.UIPackage.createObject("CommonBase","CommonTabBtn"));
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