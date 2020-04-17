/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUpCannon from "../../Extends/GameHome/CardViewFrontPowerUpCannon";

export default class CardViewFrontPowerUpCannonStruct extends fgui.GComponent
{
	public m_icon : fgui.GImage;
	public m_fx : fgui.GMovieClip;
	public m_life : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzy9y";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUpCannon {
		return <CardViewFrontPowerUpCannon><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUpCannon"));
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
		this.m_life = <CardLifePowerUp><any>(this.getChild("life"));
		
		
	}
}