/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonDialogBg from "../../Extends/CommonGame/CommonDialogBg";
import TeamSelectDialog from "../../Extends/ModuleTeam/TeamSelectDialog";

export default class TeamSelectDialogStruct extends fgui.GComponent
{
	public m_IsLeader : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_listType : fgui.GList;
	public m_listSection : fgui.GList;
	public m_bg : CommonDialogBg;

	
	public static URL:string = "ui://2ri2ybgkgmb713";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonGame","CommonBase"];

	
	public static createInstance():TeamSelectDialog {
		return <TeamSelectDialog><any>(fgui.UIPackage.createObject("ModuleTeam","TeamSelectDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_IsLeader = this.getController("IsLeader");
		this.m_Type = this.getController("Type");

		
		this.m_listType = <fgui.GList><any>(this.getChild("listType"));
		this.m_listSection = <fgui.GList><any>(this.getChild("listSection"));
		this.m_bg = <CommonDialogBg><any>(this.getChild("bg"));
		
		
	}
}