/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Button2 from "../../Extends/CommonBase/Button2";

export default class Button2Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdico5e617";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():Button2 {
		return <Button2><any>(fgui.UIPackage.createObject("CommonBase","Button2"));
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