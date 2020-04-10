/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroTag from "../../Extends/ModuleHero/HeroTag";

export default class HeroTagStruct extends fgui.GComponent
{
	public m_label : fgui.GTextField;

	
	public static URL:string = "ui://lxpvy4fwujzg1i";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroTag {
		return <HeroTag><any>(fgui.UIPackage.createObject("ModuleHero","HeroTag"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_label = <fgui.GTextField><any>(this.getChild("label"));
		
		
	}
}