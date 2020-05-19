/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerLevelBar from "../../Extends/GameHome/PlayerLevelBar";

export default class PlayerLevelBarStruct extends fgui.GComponent
{
	public m_equipDecorate : fgui.GLabel;
	public m_equipWeapon : fgui.GLabel;

	
	public static URL:string = "ui://moe42ygrn2s1cm";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PlayerLevelBar {
		return <PlayerLevelBar><any>(fgui.UIPackage.createObject("GameHome","PlayerLevelBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_equipDecorate = <fgui.GLabel><any>(this.getChild("equipDecorate"));
		this.m_equipWeapon = <fgui.GLabel><any>(this.getChild("equipWeapon"));
		
		
	}
}