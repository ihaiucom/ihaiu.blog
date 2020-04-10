/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import HeroSkillIconButton from "../../Extends/ModuleHero/HeroSkillIconButton";
import HeroSkillItem from "../../Extends/ModuleHero/HeroSkillItem";

export default class HeroSkillItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_level : fgui.GTextField;
	public m_maxLevel : fgui.GTextField;
	public m_labelOpen : fgui.GTextField;
	public m_labelType : fgui.GTextField;
	public m_btnLevel : CommonButton1;
	public m_icon : HeroSkillIconButton;

	
	public static URL:string = "ui://lxpvy4fwujzg1k";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase"];

	
	public static createInstance():HeroSkillItem {
		return <HeroSkillItem><any>(fgui.UIPackage.createObject("ModuleHero","HeroSkillItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_maxLevel = <fgui.GTextField><any>(this.getChild("maxLevel"));
		this.m_labelOpen = <fgui.GTextField><any>(this.getChild("labelOpen"));
		this.m_labelType = <fgui.GTextField><any>(this.getChild("labelType"));
		this.m_btnLevel = <CommonButton1><any>(this.getChild("btnLevel"));
		this.m_icon = <HeroSkillIconButton><any>(this.getChild("icon"));
		
		
	}
}