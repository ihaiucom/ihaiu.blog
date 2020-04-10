/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionAwardButton from "../../Extends/CommonGame/SectionAwardButton";

export default class SectionAwardButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_rewardState : fgui.Controller;
	public m_level : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9hdj6z4y";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():SectionAwardButton {
		return <SectionAwardButton><any>(fgui.UIPackage.createObject("CommonGame","SectionAwardButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_rewardState = this.getController("rewardState");
		this.m_level = this.getController("level");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}