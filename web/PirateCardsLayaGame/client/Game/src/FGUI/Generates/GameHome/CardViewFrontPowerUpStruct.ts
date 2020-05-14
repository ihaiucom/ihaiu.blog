/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUp from "../../Extends/GameHome/CardViewFrontPowerUp";

export default class CardViewFrontPowerUpStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_power : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzyaa";
	
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
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_power = <CardLifePowerUp><any>(this.getChild("power"));
		
		
	}
}