/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton5 from "../../Extends/CommonBase/CommonButton5";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import TeamView from "../../Extends/ModuleTeam/TeamView";

export default class TeamViewStruct extends fgui.GComponent
{
	public m_Filter : fgui.Controller;
	public m_Status : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_View : fgui.Controller;
	public m_ani : fgui.Transition;
	public m_labAim : fgui.GTextField;
	public m_labAuto : fgui.GTextField;
	public m_labTime : fgui.GTextField;
	public m_listFriend : fgui.GList;
	public m_labOnline : fgui.GTextField;
	public m_listPlayer : fgui.GList;
	public m_btnHelp : fgui.GButton;
	public m_btnAim : fgui.GButton;
	public m_btnFriend : fgui.GButton;
	public m_btnGroup : fgui.GButton;
	public m_btnExit : fgui.GButton;
	public m_btnInvite : fgui.GButton;
	public m_btnInviteWX : fgui.GButton;
	public m_btnReady : CommonButton5;
	public m_btnStart : CommonButton1;
	public m_btnAuto : CommonButton5;
	public m_btnCreateTeam : CommonButton1;
	public m_btnEnterTeam : CommonButton5;

	
	public static URL:string = "ui://2ri2ybgkmt4512";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonBase","CommonGame"];

	
	public static createInstance():TeamView {
		return <TeamView><any>(fgui.UIPackage.createObject("ModuleTeam","TeamView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Filter = this.getController("Filter");
		this.m_Status = this.getController("Status");
		this.m_Type = this.getController("Type");
		this.m_View = this.getController("View");

		
		this.m_labAim = <fgui.GTextField><any>(this.getChild("labAim"));
		this.m_labAuto = <fgui.GTextField><any>(this.getChild("labAuto"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_listFriend = <fgui.GList><any>(this.getChild("listFriend"));
		this.m_labOnline = <fgui.GTextField><any>(this.getChild("labOnline"));
		this.m_listPlayer = <fgui.GList><any>(this.getChild("listPlayer"));
		this.m_btnHelp = <fgui.GButton><any>(this.getChild("btnHelp"));
		this.m_btnAim = <fgui.GButton><any>(this.getChild("btnAim"));
		this.m_btnFriend = <fgui.GButton><any>(this.getChild("btnFriend"));
		this.m_btnGroup = <fgui.GButton><any>(this.getChild("btnGroup"));
		this.m_btnExit = <fgui.GButton><any>(this.getChild("btnExit"));
		this.m_btnInvite = <fgui.GButton><any>(this.getChild("btnInvite"));
		this.m_btnInviteWX = <fgui.GButton><any>(this.getChild("btnInviteWX"));
		this.m_btnReady = <CommonButton5><any>(this.getChild("btnReady"));
		this.m_btnStart = <CommonButton1><any>(this.getChild("btnStart"));
		this.m_btnAuto = <CommonButton5><any>(this.getChild("btnAuto"));
		this.m_btnCreateTeam = <CommonButton1><any>(this.getChild("btnCreateTeam"));
		this.m_btnEnterTeam = <CommonButton5><any>(this.getChild("btnEnterTeam"));
		
		
		this.m_ani =  this.getTransition("ani");
	}
}