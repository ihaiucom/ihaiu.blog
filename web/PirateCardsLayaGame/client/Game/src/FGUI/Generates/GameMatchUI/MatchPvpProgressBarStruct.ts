/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchPvpProgressBar from "../../Extends/GameMatchUI/MatchPvpProgressBar";

export default class MatchPvpProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://axwa07kx832rw2t";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():MatchPvpProgressBar {
		return <MatchPvpProgressBar><any>(fgui.UIPackage.createObject("GameMatchUI","MatchPvpProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}