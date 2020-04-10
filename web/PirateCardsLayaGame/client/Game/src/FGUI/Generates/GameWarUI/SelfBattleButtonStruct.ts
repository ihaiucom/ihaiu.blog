/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SelfBattleButton from "../../Extends/GameWarUI/SelfBattleButton";

export default class SelfBattleButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://rfow21emi78t49";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():SelfBattleButton {
		return <SelfBattleButton><any>(fgui.UIPackage.createObject("GameWarUI","SelfBattleButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}