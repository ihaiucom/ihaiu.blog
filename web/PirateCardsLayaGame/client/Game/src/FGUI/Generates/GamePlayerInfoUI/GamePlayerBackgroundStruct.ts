/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerBackground from "../../Extends/GamePlayerInfoUI/GamePlayerBackground";

export default class GamePlayerBackgroundStruct extends fgui.GComponent
{
	public m_bg : fgui.GLoader;

	
	public static URL:string = "ui://776a9nj0ckhp1d";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI"];

	
	public static createInstance():GamePlayerBackground {
		return <GamePlayerBackground><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerBackground"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		
		
	}
}