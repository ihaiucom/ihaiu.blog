/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton4 from "../../Extends/CommonBase/CommonButton4";

export default class CommonButton4Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_IsRecieved : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicgfpn24";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():CommonButton4 {
		return <CommonButton4><any>(fgui.UIPackage.createObject("CommonBase","CommonButton4"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_IsRecieved = this.getController("IsRecieved");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}