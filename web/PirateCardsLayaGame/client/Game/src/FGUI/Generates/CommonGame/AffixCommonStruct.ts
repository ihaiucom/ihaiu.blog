/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixCommon from "../../Extends/CommonGame/AffixCommon";

export default class AffixCommonStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9j4roz57";
	
	public static DependPackages:string[] = ["CommonGame","ModuleSecretLand"];

	
	public static createInstance():AffixCommon {
		return <AffixCommon><any>(fgui.UIPackage.createObject("CommonGame","AffixCommon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}