/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComCommonSkill from "../../Extends/CommonGame/ComCommonSkill";
import TeamHeroStar from "../../Extends/CommonGame/TeamHeroStar";
import PlayerItem from "../../Extends/ModuleTeam/PlayerItem";

export default class PlayerItemStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_View : fgui.Controller;
	public m_Status : fgui.Controller;
	public m_imgTitle : fgui.GLoader;
	public m_labName : fgui.GTextField;
	public m_labLv : fgui.GTextField;
	public m_labHero : fgui.GTextField;
	public m_labReady : fgui.GTextField;
	public m_labStatuse : fgui.GTextField;
	public m_keystone : fgui.GTextField;
	public m_imgHelp : fgui.GImage;
	public m_imgHero : fgui.GButton;
	public m_btnCancel : fgui.GButton;
	public m_btnHero : fgui.GButton;
	public m_btnTalent : ComCommonSkill;
	public m_star : TeamHeroStar;

	
	public static URL:string = "ui://2ri2ybgkmt4510";
	
	public static DependPackages:string[] = ["ModuleTeam","CommonBase","CommonGame"];

	
	public static createInstance():PlayerItem {
		return <PlayerItem><any>(fgui.UIPackage.createObject("ModuleTeam","PlayerItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");
		this.m_View = this.getController("View");
		this.m_Status = this.getController("Status");

		
		this.m_imgTitle = <fgui.GLoader><any>(this.getChild("imgTitle"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labLv = <fgui.GTextField><any>(this.getChild("labLv"));
		this.m_labHero = <fgui.GTextField><any>(this.getChild("labHero"));
		this.m_labReady = <fgui.GTextField><any>(this.getChild("labReady"));
		this.m_labStatuse = <fgui.GTextField><any>(this.getChild("labStatuse"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_imgHelp = <fgui.GImage><any>(this.getChild("imgHelp"));
		this.m_imgHero = <fgui.GButton><any>(this.getChild("imgHero"));
		this.m_btnCancel = <fgui.GButton><any>(this.getChild("btnCancel"));
		this.m_btnHero = <fgui.GButton><any>(this.getChild("btnHero"));
		this.m_btnTalent = <ComCommonSkill><any>(this.getChild("btnTalent"));
		this.m_star = <TeamHeroStar><any>(this.getChild("star"));
		
		
	}
}