/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CheckIDPanel from "../../Extends/ModuleLogin/CheckIDPanel";

export default class CheckIDPanelStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_labName : fgui.GTextInput;
	public m_labID : fgui.GTextInput;
	public m_btnClose : fgui.GButton;
	public m_btnMake : fgui.GButton;

	
	public static URL:string = "ui://4698ugpkqdfe1c";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():CheckIDPanel {
		return <CheckIDPanel><any>(fgui.UIPackage.createObject("ModuleLogin","CheckIDPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_labName = <fgui.GTextInput><any>(this.getChild("labName"));
		this.m_labID = <fgui.GTextInput><any>(this.getChild("labID"));
		this.m_btnClose = <fgui.GButton><any>(this.getChild("btnClose"));
		this.m_btnMake = <fgui.GButton><any>(this.getChild("btnMake"));
		
		
	}
}