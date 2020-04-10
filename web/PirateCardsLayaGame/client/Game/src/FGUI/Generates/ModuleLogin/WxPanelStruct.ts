/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WxPanel from "../../Extends/ModuleLogin/WxPanel";

export default class WxPanelStruct extends fgui.GComponent
{
	public m_btn_login : fgui.GObject;

	
	public static URL:string = "ui://4698ugpkneo62p";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():WxPanel {
		return <WxPanel><any>(fgui.UIPackage.createObject("ModuleLogin","WxPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btn_login = <fgui.GObject><any>(this.getChild("btn_login"));
		
		
	}
}