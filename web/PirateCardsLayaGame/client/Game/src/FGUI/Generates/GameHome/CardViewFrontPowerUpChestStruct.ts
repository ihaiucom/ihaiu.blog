/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUpChest from "../../Extends/GameHome/CardViewFrontPowerUpChest";

export default class CardViewFrontPowerUpChestStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_life : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzyac";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUpChest {
		return <CardViewFrontPowerUpChest><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUpChest"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_life = <CardLifePowerUp><any>(this.getChild("life"));
		
		
	}
}