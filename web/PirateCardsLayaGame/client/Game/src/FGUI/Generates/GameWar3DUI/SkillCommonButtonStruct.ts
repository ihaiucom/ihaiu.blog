/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Openskill from "../../Extends/GameWar3DUI/Openskill";
import SkillCommonButton from "../../Extends/GameWar3DUI/SkillCommonButton";

export default class SkillCommonButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_labTime : fgui.GTextField;
	public m_progressCool : fgui.GProgressBar;
	public m_effOpen : Openskill;

	
	public static URL:string = "ui://yhpe9txzo56i8t";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():SkillCommonButton {
		return <SkillCommonButton><any>(fgui.UIPackage.createObject("GameWar3DUI","SkillCommonButton"));
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
		this.m_progressCool = <fgui.GProgressBar><any>(this.getChild("progressCool"));
		this.m_effOpen = <Openskill><any>(this.getChild("effOpen"));
		
		
	}
}