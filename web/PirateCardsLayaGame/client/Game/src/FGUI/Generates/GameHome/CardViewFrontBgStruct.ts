/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontBg from "../../Extends/GameHome/CardViewFrontBg";

export default class CardViewFrontBgStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrsqzya8";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontBg {
		return <CardViewFrontBg><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontBg"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}