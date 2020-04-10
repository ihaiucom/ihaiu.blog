/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillButton from "../../Extends/CommonGame/CommonSkillButton";
import DuelTempHero from "../../Extends/ModuleDuelTemp/DuelTempHero";

export default class DuelTempHeroStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_nameLevel : fgui.GTextField;
	public m_skillBtn : CommonSkillButton;

	
	public static URL:string = "ui://rx0filvjinki1e";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame","_ResImageUIV1"];

	
	public static createInstance():DuelTempHero {
		return <DuelTempHero><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempHero"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_nameLevel = <fgui.GTextField><any>(this.getChild("nameLevel"));
		this.m_skillBtn = <CommonSkillButton><any>(this.getChild("skillBtn"));
		
		
	}
}