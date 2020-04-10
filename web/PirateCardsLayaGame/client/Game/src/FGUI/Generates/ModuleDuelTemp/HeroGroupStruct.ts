/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempHero from "../../Extends/ModuleDuelTemp/DuelTempHero";
import HeroGroup from "../../Extends/ModuleDuelTemp/HeroGroup";

export default class HeroGroupStruct extends fgui.GComponent
{
	public m_role0 : DuelTempHero;
	public m_role1 : DuelTempHero;
	public m_role2 : DuelTempHero;

	
	public static URL:string = "ui://rx0filvjad9il";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():HeroGroup {
		return <HeroGroup><any>(fgui.UIPackage.createObject("ModuleDuelTemp","HeroGroup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_role0 = <DuelTempHero><any>(this.getChild("role0"));
		this.m_role1 = <DuelTempHero><any>(this.getChild("role1"));
		this.m_role2 = <DuelTempHero><any>(this.getChild("role2"));
		
		
	}
}