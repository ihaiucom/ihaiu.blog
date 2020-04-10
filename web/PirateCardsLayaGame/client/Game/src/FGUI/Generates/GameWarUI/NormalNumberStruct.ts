/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NormalNumber from "../../Extends/GameWarUI/NormalNumber";

export default class NormalNumberStruct extends fgui.GComponent
{
	public m_text : fgui.GTextField;

	
	public static URL:string = "ui://rfow21emk5yz1o";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():NormalNumber {
		return <NormalNumber><any>(fgui.UIPackage.createObject("GameWarUI","NormalNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_text = <fgui.GTextField><any>(this.getChild("text"));
		
		
	}
}