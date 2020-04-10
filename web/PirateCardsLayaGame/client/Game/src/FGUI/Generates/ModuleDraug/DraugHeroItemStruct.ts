/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PartButton from "../../Extends/ModuleDraug/PartButton";
import DraugHeroItem from "../../Extends/ModuleDraug/DraugHeroItem";

export default class DraugHeroItemStruct extends fgui.GComponent
{
	public m_imgHero : fgui.GLoader;
	public m_labLv : fgui.GTextField;
	public m_labName : fgui.GTextField;
	public m_labHero : fgui.GTextField;
	public m_btnLast : fgui.GButton;
	public m_btnNext : fgui.GButton;
	public m_heroPart1 : PartButton;
	public m_heroPart2 : PartButton;
	public m_heroPart3 : PartButton;
	public m_heroPart4 : PartButton;
	public m_heroPart5 : PartButton;
	public m_heroPart6 : PartButton;

	
	public static URL:string = "ui://hc5dpgyndr4s33";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():DraugHeroItem {
		return <DraugHeroItem><any>(fgui.UIPackage.createObject("ModuleDraug","DraugHeroItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		this.m_labLv = <fgui.GTextField><any>(this.getChild("labLv"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labHero = <fgui.GTextField><any>(this.getChild("labHero"));
		this.m_btnLast = <fgui.GButton><any>(this.getChild("btnLast"));
		this.m_btnNext = <fgui.GButton><any>(this.getChild("btnNext"));
		this.m_heroPart1 = <PartButton><any>(this.getChild("heroPart1"));
		this.m_heroPart2 = <PartButton><any>(this.getChild("heroPart2"));
		this.m_heroPart3 = <PartButton><any>(this.getChild("heroPart3"));
		this.m_heroPart4 = <PartButton><any>(this.getChild("heroPart4"));
		this.m_heroPart5 = <PartButton><any>(this.getChild("heroPart5"));
		this.m_heroPart6 = <PartButton><any>(this.getChild("heroPart6"));
		
		
	}
}