/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ServerItem from "../../Extends/ModuleLogin/ServerItem";

export default class ServerItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_State : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_View : fgui.Controller;
	public m_labServer : fgui.GTextField;
	public m_labLevel : fgui.GTextField;

	
	public static URL:string = "ui://4698ugpklm612v";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():ServerItem {
		return <ServerItem><any>(fgui.UIPackage.createObject("ModuleLogin","ServerItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_State = this.getController("State");
		this.m_Type = this.getController("Type");
		this.m_View = this.getController("View");

		
		this.m_labServer = <fgui.GTextField><any>(this.getChild("labServer"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		
		
	}
}