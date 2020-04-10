/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonSkill from "../../Extends/CommonGame/ComCommonSkill";

export default class ComCommonSkillStruct extends fgui.GComponent
{
	public m_skillCom : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9cv08z5i";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ComCommonSkill {
		return <ComCommonSkill><any>(fgui.UIPackage.createObject("CommonGame","ComCommonSkill"));
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