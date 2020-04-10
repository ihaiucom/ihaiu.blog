/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamView from "../../Extends/ModuleTeam/TeamView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import TeamWindowUI from "../../Extends/ModuleTeam/TeamWindowUI";

export default class TeamWindowUIStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_teamView : TeamView;
	public m_head : WindowHead;

	
	public static URL:string = "ui://2ri2ybgkqf3n0";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonBase","CommonGame"];

	
	public static createInstance():TeamWindowUI {
		return <TeamWindowUI><any>(fgui.UIPackage.createObject("ModuleTeam","TeamWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_teamView = <TeamView><any>(this.getChild("teamView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		
		
	}
}