/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandExitButton from "../../Extends/BattleResult/SecretLandExitButton";

export default class SecretLandExitButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://qffcb501m2ir1x";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():SecretLandExitButton {
		return <SecretLandExitButton><any>(fgui.UIPackage.createObject("BattleResult","SecretLandExitButton"));
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