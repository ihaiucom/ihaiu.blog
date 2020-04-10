/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerPanelBackground from "../../Extends/GamePlayerInfoUI/GamePlayerPanelBackground";

export default class GamePlayerPanelBackgroundStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://776a9nj0t9hsu";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerPanelBackground {
		return <GamePlayerPanelBackground><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerPanelBackground"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}