/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxBarrel from "../../Extends/GameHome/FxBarrel";
import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardViewFrontPowerUpBarrel from "../../Extends/GameHome/CardViewFrontPowerUpBarrel";

export default class CardViewFrontPowerUpBarrelStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_openFx : FxBarrel;
	public m_life : CardLifePowerUp;

	
	public static URL:string = "ui://moe42ygrsqzyab";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontPowerUpBarrel {
		return <CardViewFrontPowerUpBarrel><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontPowerUpBarrel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_openFx = <FxBarrel><any>(this.getChild("openFx"));
		this.m_life = <CardLifePowerUp><any>(this.getChild("life"));
		
		
	}
}