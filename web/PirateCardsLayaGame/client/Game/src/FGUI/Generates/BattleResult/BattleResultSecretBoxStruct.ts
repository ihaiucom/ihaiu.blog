/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";

export default class BattleResultSecretBoxStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://qffcb501ee481m";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():BattleResultSecretBox {
		return <BattleResultSecretBox><any>(fgui.UIPackage.createObject("BattleResult","BattleResultSecretBox"));
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