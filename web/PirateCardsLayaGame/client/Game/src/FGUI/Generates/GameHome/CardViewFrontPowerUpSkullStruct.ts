/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUpSkull from "../../Extends/GameHome/CardViewFrontPowerUpSkull";

export default class CardViewFrontPowerUpSkullStruct extends fgui.GComponent
{
	public m_fx : fgui.GMovieClip;
	public m_life : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzyae";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUpSkull {
		return <CardViewFrontPowerUpSkull><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUpSkull"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_fx = <fgui.GMovieClip><any>(this.getChild("fx"));
		this.m_life = <CardLifePowerUp><any>(this.getChild("life"));
		
		
	}
}