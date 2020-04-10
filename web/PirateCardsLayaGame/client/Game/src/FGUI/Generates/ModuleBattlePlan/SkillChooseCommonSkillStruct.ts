/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillChooseCommonSkill from "../../Extends/ModuleBattlePlan/SkillChooseCommonSkill";

export default class SkillChooseCommonSkillStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_skillCom : fgui.GLoader;
	public m_skillName : fgui.GTextField;

	
	public static URL:string = "ui://lrfjmmwxnbl51n";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame"];

	
	public static createInstance():SkillChooseCommonSkill {
		return <SkillChooseCommonSkill><any>(fgui.UIPackage.createObject("ModuleBattlePlan","SkillChooseCommonSkill"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_skillCom = <fgui.GLoader><any>(this.getChild("skillCom"));
		this.m_skillName = <fgui.GTextField><any>(this.getChild("skillName"));
		
		
	}
}