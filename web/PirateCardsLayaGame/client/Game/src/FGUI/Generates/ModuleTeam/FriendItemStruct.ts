/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonPlayerIcon from "../../Extends/CommonGame/CommonPlayerIcon";
import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import FriendItem from "../../Extends/ModuleTeam/FriendItem";

export default class FriendItemStruct extends fgui.GComponent
{
	public m_State : fgui.Controller;
	public m_labName : fgui.GTextField;
	public m_labLv : fgui.GTextField;
	public m_player : CommonPlayerIcon;
	public m_btnInvite : CommonButton2;

	
	public static URL:string = "ui://2ri2ybgkmt45z";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonGame","CommonBase"];

	
	public static createInstance():FriendItem {
		return <FriendItem><any>(fgui.UIPackage.createObject("ModuleTeam","FriendItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_State = this.getController("State");

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labLv = <fgui.GTextField><any>(this.getChild("labLv"));
		this.m_player = <CommonPlayerIcon><any>(this.getChild("player"));
		this.m_btnInvite = <CommonButton2><any>(this.getChild("btnInvite"));
		
		
	}
}