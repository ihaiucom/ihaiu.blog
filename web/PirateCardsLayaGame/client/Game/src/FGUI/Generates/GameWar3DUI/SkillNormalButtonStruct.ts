/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Openskill from "../../Extends/GameWar3DUI/Openskill";
import SkillNormalButton from "../../Extends/GameWar3DUI/SkillNormalButton";

export default class SkillNormalButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_labTime : fgui.GTextField;
	public m_labMultiTime : fgui.GTextField;
	public m_labFreedTime : fgui.GTextField;
	public m_progressCool : fgui.GProgressBar;
	public m_effOpen : Openskill;
	public m_progressMultiCool : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzb3sf4n";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():SkillNormalButton {
		return <SkillNormalButton><any>(fgui.UIPackage.createObject("GameWar3DUI","SkillNormalButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_state = this.getController("state");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_labMultiTime = <fgui.GTextField><any>(this.getChild("labMultiTime"));
		this.m_labFreedTime = <fgui.GTextField><any>(this.getChild("labFreedTime"));
		this.m_progressCool = <fgui.GProgressBar><any>(this.getChild("progressCool"));
		this.m_effOpen = <Openskill><any>(this.getChild("effOpen"));
		this.m_progressMultiCool = <fgui.GProgressBar><any>(this.getChild("progressMultiCool"));
		
		
	}
}