/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookRewardBoxButton from "../../Extends/ModuleSecretBook/SecretBookRewardBoxButton";

export default class SecretBookRewardBoxButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_rewardState : fgui.Controller;
	public m_level : fgui.Controller;

	
	public static URL:string = "ui://dmgf4euxoue8z";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretBookRewardBoxButton {
		return <SecretBookRewardBoxButton><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookRewardBoxButton"));
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

		
		
		
	}
}