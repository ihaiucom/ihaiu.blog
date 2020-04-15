/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewBack from "../../Extends/GameHome/CardViewBack";

export default class CardViewBackStruct extends fgui.GComponent
{
	public m_cardBack : fgui.GImage;

	
	public static URL:string = "ui://moe42ygrsqzya2";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewBack {
		return <CardViewBack><any>(fgui.UIPackage.createObject("GameHome","CardViewBack"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_cardBack = <fgui.GImage><any>(this.getChild("cardBack"));
		
		
	}
}