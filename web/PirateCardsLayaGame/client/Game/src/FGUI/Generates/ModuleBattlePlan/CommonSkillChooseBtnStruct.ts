/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillChooseBtn from "../../Extends/ModuleBattlePlan/CommonSkillChooseBtn";

export default class CommonSkillChooseBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_hasSkill : fgui.Controller;
	public m_select : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://lrfjmmwxw13s1r";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame"];

	
	public static createInstance():CommonSkillChooseBtn {
		return <CommonSkillChooseBtn><any>(fgui.UIPackage.createObject("ModuleBattlePlan","CommonSkillChooseBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_hasSkill = this.getController("hasSkill");
		this.m_select = this.getController("select");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}