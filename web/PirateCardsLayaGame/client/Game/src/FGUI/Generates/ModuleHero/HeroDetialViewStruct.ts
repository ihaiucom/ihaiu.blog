/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncBaseView from "../../Extends/ModuleHero/HeroFuncBaseView";
import HeroFuncSkillView from "../../Extends/ModuleHero/HeroFuncSkillView";
import HeroFuncEquipView from "../../Extends/ModuleHero/HeroFuncEquipView";
import HeroFuncStarView from "../../Extends/ModuleHero/HeroFuncStarView";
import HeroDetialView from "../../Extends/ModuleHero/HeroDetialView";

export default class HeroDetialViewStruct extends fgui.GComponent
{
	public m_funcIndex : fgui.Controller;
	public m_btnInfo : fgui.GButton;
	public m_btnSkill : fgui.GButton;
	public m_btnEquip : fgui.GButton;
	public m_btnStar : fgui.GButton;
	public m_baseView : HeroFuncBaseView;
	public m_skillView : HeroFuncSkillView;
	public m_equipView : HeroFuncEquipView;
	public m_starView : HeroFuncStarView;

	
	public static URL:string = "ui://lxpvy4fwvpjn7v";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase","CommonGame"];

	
	public static createInstance():HeroDetialView {
		return <HeroDetialView><any>(fgui.UIPackage.createObject("ModuleHero","HeroDetialView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_funcIndex = this.getController("funcIndex");

		
		this.m_btnInfo = <fgui.GButton><any>(this.getChild("btnInfo"));
		this.m_btnSkill = <fgui.GButton><any>(this.getChild("btnSkill"));
		this.m_btnEquip = <fgui.GButton><any>(this.getChild("btnEquip"));
		this.m_btnStar = <fgui.GButton><any>(this.getChild("btnStar"));
		this.m_baseView = <HeroFuncBaseView><any>(this.getChild("baseView"));
		this.m_skillView = <HeroFuncSkillView><any>(this.getChild("skillView"));
		this.m_equipView = <HeroFuncEquipView><any>(this.getChild("equipView"));
		this.m_starView = <HeroFuncStarView><any>(this.getChild("starView"));
		
		
	}
}