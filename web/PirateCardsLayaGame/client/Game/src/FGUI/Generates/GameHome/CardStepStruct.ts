/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardStep from "../../Extends/GameHome/CardStep";

export default class CardStepStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrn2s1cu";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardStep {
		return <CardStep><any>(fgui.UIPackage.createObject("GameHome","CardStep"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}