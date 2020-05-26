/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Level from "../../Extends/GameHome/Level";
import ExpBar from "../../Extends/GameHome/ExpBar";
import EquipIcon from "../../Extends/GameHome/EquipIcon";
import PlayerLevelBar from "../../Extends/GameHome/PlayerLevelBar";

export default class PlayerLevelBarStruct extends fgui.GComponent
{
	public m_level : Level;
	public m_exp : ExpBar;
	public m_equipDecorate : EquipIcon;
	public m_equipWeapon : EquipIcon;

	
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
		

		
		this.m_level = <Level><any>(this.getChild("level"));
		this.m_exp = <ExpBar><any>(this.getChild("exp"));
		this.m_equipDecorate = <EquipIcon><any>(this.getChild("equipDecorate"));
		this.m_equipWeapon = <EquipIcon><any>(this.getChild("equipWeapon"));
		
		
	}
}