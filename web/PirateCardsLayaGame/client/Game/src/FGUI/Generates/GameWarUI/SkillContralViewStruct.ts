/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillButton from "../../Extends/GameWarUI/SkillButton";
import SkillContralView from "../../Extends/GameWarUI/SkillContralView";

export default class SkillContralViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_rollBar : fgui.GProgressBar;
	public m_btnAttack : fgui.GButton;
	public m_skillItem1 : SkillButton;
	public m_skillItem2 : SkillButton;
	public m_skillItem3 : SkillButton;
	public m_skillItem4 : SkillButton;
	public m_skillItem5 : SkillButton;
	public m_skillItem6 : SkillButton;
	public m_skillItem7 : SkillButton;

	
	public static URL:string = "ui://rfow21em98hp7";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():SkillContralView {
		return <SkillContralView><any>(fgui.UIPackage.createObject("GameWarUI","SkillContralView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_rollBar = <fgui.GProgressBar><any>(this.getChild("rollBar"));
		this.m_btnAttack = <fgui.GButton><any>(this.getChild("btnAttack"));
		this.m_skillItem1 = <SkillButton><any>(this.getChild("skillItem1"));
		this.m_skillItem2 = <SkillButton><any>(this.getChild("skillItem2"));
		this.m_skillItem3 = <SkillButton><any>(this.getChild("skillItem3"));
		this.m_skillItem4 = <SkillButton><any>(this.getChild("skillItem4"));
		this.m_skillItem5 = <SkillButton><any>(this.getChild("skillItem5"));
		this.m_skillItem6 = <SkillButton><any>(this.getChild("skillItem6"));
		this.m_skillItem7 = <SkillButton><any>(this.getChild("skillItem7"));
		
		
	}
}