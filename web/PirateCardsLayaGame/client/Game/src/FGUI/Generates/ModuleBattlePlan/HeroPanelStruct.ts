/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BoardHeroPanel from "../../Extends/ModuleBattlePlan/BoardHeroPanel";
import HeroPanel from "../../Extends/ModuleBattlePlan/HeroPanel";

export default class HeroPanelStruct extends fgui.GComponent
{
	public m_lock : fgui.Controller;
	public m_img_background : fgui.GImage;
	public m_img_lock : fgui.GImage;
	public m_textTeamUnlcok : fgui.GTextField;
	public m_btn_centerChooseHero : fgui.GButton;
	public m_com_heroMsg : BoardHeroPanel;

	
	public static URL:string = "ui://lrfjmmwxod3l5";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame"];

	
	public static createInstance():HeroPanel {
		return <HeroPanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","HeroPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_lock = this.getController("lock");

		
		this.m_img_background = <fgui.GImage><any>(this.getChild("img_background"));
		this.m_img_lock = <fgui.GImage><any>(this.getChild("img_lock"));
		this.m_textTeamUnlcok = <fgui.GTextField><any>(this.getChild("textTeamUnlcok"));
		this.m_btn_centerChooseHero = <fgui.GButton><any>(this.getChild("btn_centerChooseHero"));
		this.m_com_heroMsg = <BoardHeroPanel><any>(this.getChild("com_heroMsg"));
		
		
	}
}