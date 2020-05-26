/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontPowerUpBomb from "../../Extends/GameHome/CardViewFrontPowerUpBomb";

export default class CardViewFrontPowerUpBombStruct extends fgui.GComponent
{
	public m_icon : fgui.GImage;
	public m_fx : fgui.GMovieClip;
	public m_power : CardLifePowerUp;
	public m_life : CardLifeWarriow;

	
	public static URL:string = "ui://moe42ygrsqzyad";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUpBomb {
		return <CardViewFrontPowerUpBomb><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUpBomb"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GImage><any>(this.getChild("icon"));
		this.m_fx = <fgui.GMovieClip><any>(this.getChild("fx"));
		this.m_power = <CardLifePowerUp><any>(this.getChild("power"));
		this.m_life = <CardLifeWarriow><any>(this.getChild("life"));
		
		
	}
}