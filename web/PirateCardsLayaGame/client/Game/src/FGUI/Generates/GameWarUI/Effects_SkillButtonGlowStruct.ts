/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effects_SkillButtonGlow from "../../Extends/GameWarUI/Effects_SkillButtonGlow";

export default class Effects_SkillButtonGlowStruct extends fgui.GComponent
{
	public m_promptAct : fgui.Transition;

	
	public static URL:string = "ui://rfow21emywsfw56";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():Effects_SkillButtonGlow {
		return <Effects_SkillButtonGlow><any>(fgui.UIPackage.createObject("GameWarUI","Effects_SkillButtonGlow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_promptAct =  this.getTransition("promptAct");
	}
}