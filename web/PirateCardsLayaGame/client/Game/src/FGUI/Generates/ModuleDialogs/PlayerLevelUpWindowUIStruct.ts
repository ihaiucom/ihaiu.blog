/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerLevelUpWindowUI from "../../Extends/ModuleDialogs/PlayerLevelUpWindowUI";

export default class PlayerLevelUpWindowUIStruct extends fgui.GComponent
{
	public m_bg : fgui.GLoader;
	public m_playerLevel : fgui.GTextField;
	public m_fatigueNum : fgui.GTextField;
	public m_fatigueMax : fgui.GTextField;
	public m_heroLevelMax : fgui.GTextField;
	public m_newPlayerLevel : fgui.GTextField;
	public m_newFatigueNum : fgui.GTextField;
	public m_newFatigueMax : fgui.GTextField;
	public m_newHeroLevelMax : fgui.GTextField;

	
	public static URL:string = "ui://enntu5suii7416";
	
	public static DependPackages:string[] = ["ModuleDialogs","CommonGame"];

	
	public static createInstance():PlayerLevelUpWindowUI {
		return <PlayerLevelUpWindowUI><any>(fgui.UIPackage.createObject("ModuleDialogs","PlayerLevelUpWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_playerLevel = <fgui.GTextField><any>(this.getChild("playerLevel"));
		this.m_fatigueNum = <fgui.GTextField><any>(this.getChild("fatigueNum"));
		this.m_fatigueMax = <fgui.GTextField><any>(this.getChild("fatigueMax"));
		this.m_heroLevelMax = <fgui.GTextField><any>(this.getChild("heroLevelMax"));
		this.m_newPlayerLevel = <fgui.GTextField><any>(this.getChild("newPlayerLevel"));
		this.m_newFatigueNum = <fgui.GTextField><any>(this.getChild("newFatigueNum"));
		this.m_newFatigueMax = <fgui.GTextField><any>(this.getChild("newFatigueMax"));
		this.m_newHeroLevelMax = <fgui.GTextField><any>(this.getChild("newHeroLevelMax"));
		
		
	}
}