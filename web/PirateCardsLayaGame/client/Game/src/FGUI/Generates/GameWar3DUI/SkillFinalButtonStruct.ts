/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FuryEffect from "../../Extends/GameWar3DUI/FuryEffect";
import SkillFinalButton from "../../Extends/GameWar3DUI/SkillFinalButton";

export default class SkillFinalButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_labTime : fgui.GTextField;
	public m_effFire : fgui.GMovieClip;
	public m_progressCool : fgui.GProgressBar;
	public m_effFury : FuryEffect;

	
	public static URL:string = "ui://yhpe9txzo56i8e";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():SkillFinalButton {
		return <SkillFinalButton><any>(fgui.UIPackage.createObject("GameWar3DUI","SkillFinalButton"));
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
		this.m_effFire = <fgui.GMovieClip><any>(this.getChild("effFire"));
		this.m_progressCool = <fgui.GProgressBar><any>(this.getChild("progressCool"));
		this.m_effFury = <FuryEffect><any>(this.getChild("effFury"));
		
		
	}
}