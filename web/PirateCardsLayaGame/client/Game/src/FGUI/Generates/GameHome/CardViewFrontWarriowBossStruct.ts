/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontWarriowBoss from "../../Extends/GameHome/CardViewFrontWarriowBoss";

export default class CardViewFrontWarriowBossStruct extends fgui.GButton
{
	public m_bg : fgui.GLoader;
	public m_icon : fgui.GLabel;
	public m_life : fgui.GLabel;

	
	public static URL:string = "ui://moe42ygrsqzya6";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontWarriowBoss {
		return <CardViewFrontWarriowBoss><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontWarriowBoss"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_icon = <fgui.GLabel><any>(this.getChild("icon"));
		this.m_life = <fgui.GLabel><any>(this.getChild("life"));
		
		
	}
}