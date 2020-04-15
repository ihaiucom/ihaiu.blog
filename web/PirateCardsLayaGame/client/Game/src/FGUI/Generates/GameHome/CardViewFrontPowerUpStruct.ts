/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUp from "../../Extends/GameHome/CardViewFrontPowerUp";

export default class CardViewFrontPowerUpStruct extends fgui.GComponent
{
	public m_bg : fgui.GLoader;
	public m_life : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzy9y";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUp {
		return <CardViewFrontPowerUp><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUp"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_life = <CardLifePowerUp><any>(this.getChild("life"));
		
		
	}
}