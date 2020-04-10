/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CritNumber from "../../Extends/GameWarUI/CritNumber";

export default class CritNumberStruct extends fgui.GComponent
{
	public m_Text : fgui.GTextField;

	
	public static URL:string = "ui://rfow21emk5yz1p";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():CritNumber {
		return <CritNumber><any>(fgui.UIPackage.createObject("GameWarUI","CritNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_Text = <fgui.GTextField><any>(this.getChild("Text"));
		
		
	}
}