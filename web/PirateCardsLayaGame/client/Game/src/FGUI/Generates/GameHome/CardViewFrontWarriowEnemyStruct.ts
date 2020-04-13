/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontWarriowEnemy from "../../Extends/GameHome/CardViewFrontWarriowEnemy";

export default class CardViewFrontWarriowEnemyStruct extends fgui.GButton
{
	public m_bg : fgui.GLoader;
	public m_icon : fgui.GLabel;
	public m_life : fgui.GLabel;

	
	public static URL:string = "ui://moe42ygrsqzya3";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontWarriowEnemy {
		return <CardViewFrontWarriowEnemy><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontWarriowEnemy"));
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