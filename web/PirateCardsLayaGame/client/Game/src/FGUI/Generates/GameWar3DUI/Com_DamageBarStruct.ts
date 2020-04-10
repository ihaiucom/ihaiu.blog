/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DamageBar from "../../Extends/GameWar3DUI/DamageBar";
import Com_DamageBar from "../../Extends/GameWar3DUI/Com_DamageBar";

export default class Com_DamageBarStruct extends fgui.GComponent
{
	public m_playerName : fgui.GTextField;
	public m_damageNum : fgui.GTextField;
	public m_damageBar : DamageBar;

	
	public static URL:string = "ui://yhpe9txzk8vb9b";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():Com_DamageBar {
		return <Com_DamageBar><any>(fgui.UIPackage.createObject("GameWar3DUI","com_DamageBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_playerName = <fgui.GTextField><any>(this.getChild("playerName"));
		this.m_damageNum = <fgui.GTextField><any>(this.getChild("damageNum"));
		this.m_damageBar = <DamageBar><any>(this.getChild("damageBar"));
		
		
	}
}