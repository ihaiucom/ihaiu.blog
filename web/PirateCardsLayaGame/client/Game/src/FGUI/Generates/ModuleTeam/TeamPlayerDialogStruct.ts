/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import CommonPlayerIcon from "../../Extends/CommonGame/CommonPlayerIcon";
import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import TeamPlayerDialog from "../../Extends/ModuleTeam/TeamPlayerDialog";

export default class TeamPlayerDialogStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;
	public m_labGroup : fgui.GTextField;
	public m_labLevel : fgui.GTextField;
	public m_btnClose : EmptyButton;
	public m_player : CommonPlayerIcon;
	public m_btnSee : CommonButton2;
	public m_btnFriend : CommonButton2;
	public m_btnChate : CommonButton2;
	public m_btnLeader : CommonButton2;

	
	public static URL:string = "ui://2ri2ybgk7xx414";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonBase","CommonGame"];

	
	public static createInstance():TeamPlayerDialog {
		return <TeamPlayerDialog><any>(fgui.UIPackage.createObject("ModuleTeam","TeamPlayerDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labGroup = <fgui.GTextField><any>(this.getChild("labGroup"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		this.m_btnClose = <EmptyButton><any>(this.getChild("btnClose"));
		this.m_player = <CommonPlayerIcon><any>(this.getChild("player"));
		this.m_btnSee = <CommonButton2><any>(this.getChild("btnSee"));
		this.m_btnFriend = <CommonButton2><any>(this.getChild("btnFriend"));
		this.m_btnChate = <CommonButton2><any>(this.getChild("btnChate"));
		this.m_btnLeader = <CommonButton2><any>(this.getChild("btnLeader"));
		
		
	}
}