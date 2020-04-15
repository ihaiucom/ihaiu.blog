/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";

export default class CardLifePowerUpStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrsqzy9z";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardLifePowerUp {
		return <CardLifePowerUp><any>(fgui.UIPackage.createObject("GameHome","CardLifePowerUp"));
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