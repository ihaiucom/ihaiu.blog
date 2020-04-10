/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncEquipView from "../../Extends/ModuleHero/HeroFuncEquipView";

export default class HeroFuncEquipViewStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://lxpvy4fwujzg1n";
	
	public static DependPackages:string[] = ["ModuleHero"];

	
	public static createInstance():HeroFuncEquipView {
		return <HeroFuncEquipView><any>(fgui.UIPackage.createObject("ModuleHero","HeroFuncEquipView"));
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