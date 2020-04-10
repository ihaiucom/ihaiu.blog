/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Com_DamagePanel from "../../Extends/GameWar3DUI/Com_DamagePanel";
import TeamInfoView from "../../Extends/GameWar3DUI/TeamInfoView";

export default class TeamInfoViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_memberList : fgui.GList;
	public m_teamInfoBtnList : fgui.GList;
	public m_comDamage : Com_DamagePanel;

	
	public static URL:string = "ui://yhpe9txzk8vb94";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():TeamInfoView {
		return <TeamInfoView><any>(fgui.UIPackage.createObject("GameWar3DUI","TeamInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_memberList = <fgui.GList><any>(this.getChild("memberList"));
		this.m_teamInfoBtnList = <fgui.GList><any>(this.getChild("teamInfoBtnList"));
		this.m_comDamage = <Com_DamagePanel><any>(this.getChild("comDamage"));
		
		
	}
}