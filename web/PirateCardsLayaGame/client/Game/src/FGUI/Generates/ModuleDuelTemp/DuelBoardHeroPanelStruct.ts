/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonSkill from "../../Extends/ModuleBattlePlan/ComCommonSkill";
import ComCommonStar from "../../Extends/CommonGame/ComCommonStar";
import DuelBoardHeroPanel from "../../Extends/ModuleDuelTemp/DuelBoardHeroPanel";

export default class DuelBoardHeroPanelStruct extends fgui.GComponent
{
	public m_img_background : fgui.GLoader;
	public m_img_hero : fgui.GLoader;
	public m_img_name : fgui.GLoader;
	public m_text_level : fgui.GTextField;
	public m_btnInfo : fgui.GButton;
	public m_btnCommonSkill : ComCommonSkill;
	public m_comStars : ComCommonStar;

	
	public static URL:string = "ui://rx0filvjad9im";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","ModuleBattlePlan","CommonGame"];

	
	public static createInstance():DuelBoardHeroPanel {
		return <DuelBoardHeroPanel><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelBoardHeroPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_img_background = <fgui.GLoader><any>(this.getChild("img_background"));
		this.m_img_hero = <fgui.GLoader><any>(this.getChild("img_hero"));
		this.m_img_name = <fgui.GLoader><any>(this.getChild("img_name"));
		this.m_text_level = <fgui.GTextField><any>(this.getChild("text_level"));
		this.m_btnInfo = <fgui.GButton><any>(this.getChild("btnInfo"));
		this.m_btnCommonSkill = <ComCommonSkill><any>(this.getChild("btnCommonSkill"));
		this.m_comStars = <ComCommonStar><any>(this.getChild("comStars"));
		
		
	}
}