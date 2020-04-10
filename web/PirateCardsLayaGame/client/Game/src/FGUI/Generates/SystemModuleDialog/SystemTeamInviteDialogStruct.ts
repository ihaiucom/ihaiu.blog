/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemTeamInviteDialog from "../../Extends/SystemModuleDialog/SystemTeamInviteDialog";

export default class SystemTeamInviteDialogStruct extends fgui.GComponent
{
	public m_labInvite : fgui.GTextField;
	public m_btnClose : fgui.GButton;
	public m_btnReceive : fgui.GButton;
	public m_btnRefuse : fgui.GButton;
	public m_btnWait : fgui.GButton;

	
	public static URL:string = "ui://q5yddivtabbg10";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():SystemTeamInviteDialog {
		return <SystemTeamInviteDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SystemTeamInviteDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labInvite = <fgui.GTextField><any>(this.getChild("labInvite"));
		this.m_btnClose = <fgui.GButton><any>(this.getChild("btnClose"));
		this.m_btnReceive = <fgui.GButton><any>(this.getChild("btnReceive"));
		this.m_btnRefuse = <fgui.GButton><any>(this.getChild("btnRefuse"));
		this.m_btnWait = <fgui.GButton><any>(this.getChild("btnWait"));
		
		
	}
}