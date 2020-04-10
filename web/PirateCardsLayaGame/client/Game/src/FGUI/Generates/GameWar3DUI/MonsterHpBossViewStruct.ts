/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterHpBossView from "../../Extends/GameWar3DUI/MonsterHpBossView";

export default class MonsterHpBossViewStruct extends fgui.GComponent
{
	public m_imgHero : fgui.GLoader;
	public m_hpNumCount_Backgroud : fgui.GImage;
	public m_helperBar : fgui.GImage;
	public m_listBuff : fgui.GList;
	public m_monsterName : fgui.GTextField;
	public m_hpCount : fgui.GTextField;
	public m_hpNumText : fgui.GTextField;
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

	
	public static URL:string = "ui://yhpe9txzq91pd1";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():MonsterHpBossView {
		return <MonsterHpBossView><any>(fgui.UIPackage.createObject("GameWar3DUI","MonsterHpBossView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		this.m_hpNumCount_Backgroud = <fgui.GImage><any>(this.getChild("hpNumCount_Backgroud"));
		this.m_helperBar = <fgui.GImage><any>(this.getChild("helperBar"));
		this.m_listBuff = <fgui.GList><any>(this.getChild("listBuff"));
		this.m_monsterName = <fgui.GTextField><any>(this.getChild("monsterName"));
		this.m_hpCount = <fgui.GTextField><any>(this.getChild("hpCount"));
		this.m_hpNumText = <fgui.GTextField><any>(this.getChild("hpNumText"));
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
		
		
	}
}