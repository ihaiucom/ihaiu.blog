/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterShortHp from "../../Extends/GameWar3DUI/MonsterShortHp";

export default class MonsterShortHpStruct extends fgui.GComponent
{
	public m_helperBar : fgui.GImage;
	public m_monsterName : fgui.GTextField;
	public m_hpNumCount_Backgroud : fgui.GImage;
	public m_hpCount : fgui.GTextField;
	public m_monsterHead : fgui.GLoader;
	public m_grey_0 : fgui.GProgressBar;
	public m_hpBar_0 : fgui.GProgressBar;
	public m_grey_1 : fgui.GProgressBar;
	public m_hpBar_1 : fgui.GProgressBar;
	public m_grey_2 : fgui.GProgressBar;
	public m_hpBar_2 : fgui.GProgressBar;
	public m_grey_3 : fgui.GProgressBar;
	public m_hpBar_3 : fgui.GProgressBar;
	public m_grey_4 : fgui.GProgressBar;
	public m_hpBar_4 : fgui.GProgressBar;
	public m_zhan : fgui.GComponent;

	
	public static URL:string = "ui://yhpe9txzq91pcy";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():MonsterShortHp {
		return <MonsterShortHp><any>(fgui.UIPackage.createObject("GameWar3DUI","MonsterShortHp"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_helperBar = <fgui.GImage><any>(this.getChild("helperBar"));
		this.m_monsterName = <fgui.GTextField><any>(this.getChild("monsterName"));
		this.m_hpNumCount_Backgroud = <fgui.GImage><any>(this.getChild("hpNumCount_Backgroud"));
		this.m_hpCount = <fgui.GTextField><any>(this.getChild("hpCount"));
		this.m_monsterHead = <fgui.GLoader><any>(this.getChild("monsterHead"));
		this.m_grey_0 = <fgui.GProgressBar><any>(this.getChild("grey_0"));
		this.m_hpBar_0 = <fgui.GProgressBar><any>(this.getChild("hpBar_0"));
		this.m_grey_1 = <fgui.GProgressBar><any>(this.getChild("grey_1"));
		this.m_hpBar_1 = <fgui.GProgressBar><any>(this.getChild("hpBar_1"));
		this.m_grey_2 = <fgui.GProgressBar><any>(this.getChild("grey_2"));
		this.m_hpBar_2 = <fgui.GProgressBar><any>(this.getChild("hpBar_2"));
		this.m_grey_3 = <fgui.GProgressBar><any>(this.getChild("grey_3"));
		this.m_hpBar_3 = <fgui.GProgressBar><any>(this.getChild("hpBar_3"));
		this.m_grey_4 = <fgui.GProgressBar><any>(this.getChild("grey_4"));
		this.m_hpBar_4 = <fgui.GProgressBar><any>(this.getChild("hpBar_4"));
		this.m_zhan = <fgui.GComponent><any>(this.getChild("zhan"));
		
		
	}
}