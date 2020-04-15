/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardShield from "../../Extends/GameHome/CardShield";

export default class CardShieldStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrsqzya0";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardShield {
		return <CardShield><any>(fgui.UIPackage.createObject("GameHome","CardShield"));
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