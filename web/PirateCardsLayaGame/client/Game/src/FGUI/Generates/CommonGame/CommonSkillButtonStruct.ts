/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillButton from "../../Extends/CommonGame/CommonSkillButton";

export default class CommonSkillButtonStruct extends fgui.GComponent
{
	public m_skillCom : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9inkiz57";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommonSkillButton {
		return <CommonSkillButton><any>(fgui.UIPackage.createObject("CommonGame","CommonSkillButton"));
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