/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontWarriow from "../../Extends/GameHome/CardViewFrontWarriow";

export default class CardViewFrontWarriowStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_life : CardLifeWarriow;

	
	public static URL:string = "ui://moe42ygrsqzy9w";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontWarriow {
		return <CardViewFrontWarriow><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontWarriow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_life = <CardLifeWarriow><any>(this.getChild("life"));
		
		
	}
}