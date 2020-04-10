/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardBoxButton from "../../Extends/GameSectionsUI/RewardBoxButton";

export default class RewardBoxButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_rewardState : fgui.Controller;
	public m_level : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://0ajdzfv8l03wz2i";
	
	public static DependPackages:string[] = ["GameSectionsUI","CommonGame"];

	
	public static createInstance():RewardBoxButton {
		return <RewardBoxButton><any>(fgui.UIPackage.createObject("GameSectionsUI","RewardBoxButton"));
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