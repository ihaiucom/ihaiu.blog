/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SpriteEnemy from "../../Extends/GameHome/SpriteEnemy";
import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontWarriowEnemy from "../../Extends/GameHome/CardViewFrontWarriowEnemy";

export default class CardViewFrontWarriowEnemyStruct extends fgui.GButton
{
	public m_icon : SpriteEnemy;
	public m_life : CardLifeWarriow;

	
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
		

		
		this.m_icon = <SpriteEnemy><any>(this.getChild("icon"));
		this.m_life = <CardLifeWarriow><any>(this.getChild("life"));
		
		
	}
}