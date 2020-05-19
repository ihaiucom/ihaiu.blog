/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ExpBar from "../../Extends/GameHome/ExpBar";

export default class ExpBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://moe42ygrn2s1co";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ExpBar {
		return <ExpBar><any>(fgui.UIPackage.createObject("GameHome","ExpBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}