/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroPageLabel from "../../Extends/ModuleHero/HeroPageLabel";

export default class HeroPageLabelStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://lxpvy4fwlnnh54";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroPageLabel {
		return <HeroPageLabel><any>(fgui.UIPackage.createObject("ModuleHero","HeroPageLabel"));
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