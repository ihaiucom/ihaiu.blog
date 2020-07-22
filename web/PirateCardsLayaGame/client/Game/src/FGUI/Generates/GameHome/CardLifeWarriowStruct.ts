/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";

export default class CardLifeWarriowStruct extends fgui.GLabel
{
	public m_dir : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrsqzy9x";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardLifeWarriow {
		return <CardLifeWarriow><any>(fgui.UIPackage.createObject("GameHome","CardLifeWarriow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_dir = this.getController("dir");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}