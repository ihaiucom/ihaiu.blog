/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillChoosePanel from "../../Extends/ModuleBattlePlan/SkillChoosePanel";

export default class SkillChoosePanelStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_btn_skillUnChoose : fgui.GButton;
	public m_btn_skillChoose : fgui.GButton;

	
	public static URL:string = "ui://lrfjmmwxod3la";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():SkillChoosePanel {
		return <SkillChoosePanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","SkillChoosePanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_btn_skillUnChoose = <fgui.GButton><any>(this.getChild("btn_skillUnChoose"));
		this.m_btn_skillChoose = <fgui.GButton><any>(this.getChild("btn_skillChoose"));
		
		
	}
}