/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHP from "../../Extends/GameWarUI/PlayerHP";

export default class PlayerHPStruct extends fgui.GProgressBar
{
	public m_playerType : fgui.Controller;
	public m_bar : fgui.GLoader;

	
	public static URL:string = "ui://rfow21emrw7o4t";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():PlayerHP {
		return <PlayerHP><any>(fgui.UIPackage.createObject("GameWarUI","PlayerHP"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_playerType = this.getController("playerType");

		
		this.m_bar = <fgui.GLoader><any>(this.getChild("bar"));
		
		
	}
}