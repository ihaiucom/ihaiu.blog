/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ServerItem from "../../Extends/ModuleLogin/ServerItem";
import CommonDialogBg from "../../Extends/ModuleLogin/CommonDialogBg";
import ServerPanel from "../../Extends/ModuleLogin/ServerPanel";

export default class ServerPanelStruct extends fgui.GComponent
{
	public m_Server : fgui.Controller;
	public m_listMenu : fgui.GList;
	public m_listServer : fgui.GList;
	public m_btnChange : ServerItem;
	public m_btnStart : fgui.GButton;
	public m_bg : CommonDialogBg;

	
	public static URL:string = "ui://4698ugpklm612r";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():ServerPanel {
		return <ServerPanel><any>(fgui.UIPackage.createObject("ModuleLogin","ServerPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Server = this.getController("Server");

		
		this.m_listMenu = <fgui.GList><any>(this.getChild("listMenu"));
		this.m_listServer = <fgui.GList><any>(this.getChild("listServer"));
		this.m_btnChange = <ServerItem><any>(this.getChild("btnChange"));
		this.m_btnStart = <fgui.GButton><any>(this.getChild("btnStart"));
		this.m_bg = <CommonDialogBg><any>(this.getChild("bg"));
		
		
	}
}