/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonSkill from "../../Extends/ModuleBattlePlan/ComCommonSkill";

export default class ComCommonSkillStruct extends fgui.GComponent
{
	public m_skillCom : fgui.GLoader;

	
	public static URL:string = "ui://lrfjmmwxj35sl";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():ComCommonSkill {
		return <ComCommonSkill><any>(fgui.UIPackage.createObject("ModuleBattlePlan","ComCommonSkill"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_skillCom = <fgui.GLoader><any>(this.getChild("skillCom"));
		
		
	}
}