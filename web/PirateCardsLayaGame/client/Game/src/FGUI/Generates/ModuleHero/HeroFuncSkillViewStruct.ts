/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncSkillView from "../../Extends/ModuleHero/HeroFuncSkillView";

export default class HeroFuncSkillViewStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://lxpvy4fwujzg1j";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroFuncSkillView {
		return <HeroFuncSkillView><any>(fgui.UIPackage.createObject("ModuleHero","HeroFuncSkillView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}