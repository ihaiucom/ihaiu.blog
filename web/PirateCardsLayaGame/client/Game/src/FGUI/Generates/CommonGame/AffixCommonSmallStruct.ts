/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixCommonSmall from "../../Extends/CommonGame/AffixCommonSmall";

export default class AffixCommonSmallStruct extends fgui.GButton
{
	public m_test : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n98jdiz5q";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():AffixCommonSmall {
		return <AffixCommonSmall><any>(fgui.UIPackage.createObject("CommonGame","AffixCommonSmall"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_test = this.getController("test");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}