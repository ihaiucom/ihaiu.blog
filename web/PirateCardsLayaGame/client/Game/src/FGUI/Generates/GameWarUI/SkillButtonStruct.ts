/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CoolProgressBar from "../../Extends/GameWarUI/CoolProgressBar";
import Effects_SkillButtonGlow from "../../Extends/GameWarUI/Effects_SkillButtonGlow";
import SkillButton from "../../Extends/GameWarUI/SkillButton";

export default class SkillButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_CDNumber : fgui.GTextField;
	public m_shieldSpr : fgui.GImage;
	public m_progressCool : CoolProgressBar;
	public m_effectComponent : Effects_SkillButtonGlow;

	
	public static URL:string = "ui://rfow21emi78t25";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():SkillButton {
		return <SkillButton><any>(fgui.UIPackage.createObject("GameWarUI","SkillButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_CDNumber = <fgui.GTextField><any>(this.getChild("CDNumber"));
		this.m_shieldSpr = <fgui.GImage><any>(this.getChild("shieldSpr"));
		this.m_progressCool = <CoolProgressBar><any>(this.getChild("progressCool"));
		this.m_effectComponent = <Effects_SkillButtonGlow><any>(this.getChild("effectComponent"));
		
		
	}
}