/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonSkill from "../../Extends/ModuleBattlePlan/ComCommonSkill";
import ComCommonStar from "../../Extends/CommonGame/ComCommonStar";
import BoardHeroPanel from "../../Extends/ModuleBattlePlan/BoardHeroPanel";

export default class BoardHeroPanelStruct extends fgui.GComponent
{
	public m_img_background : fgui.GLoader;
	public m_img_hero : fgui.GLoader;
	public m_img_name : fgui.GLoader;
	public m_text_level : fgui.GTextField;
	public m_btnCommonSkill : ComCommonSkill;
	public m_comStars : ComCommonStar;

	
	public static URL:string = "ui://lrfjmmwxod3l9";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame"];

	
	public static createInstance():BoardHeroPanel {
		return <BoardHeroPanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","BoardHeroPanel"));
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
		this.m_btnCommonSkill = <ComCommonSkill><any>(this.getChild("btnCommonSkill"));
		this.m_comStars = <ComCommonStar><any>(this.getChild("comStars"));
		
		
	}
}