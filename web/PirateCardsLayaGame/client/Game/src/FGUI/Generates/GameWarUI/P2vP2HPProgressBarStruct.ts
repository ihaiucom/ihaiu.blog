/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2HPProgressBar from "../../Extends/GameWarUI/P2vP2HPProgressBar";

export default class P2vP2HPProgressBarStruct extends fgui.GProgressBar
{
	public m_player : fgui.Controller;
	public m_hero : fgui.Controller;
	public m_bar : fgui.GLoader;

	
	public static URL:string = "ui://rfow21emb3g7w6p";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():P2vP2HPProgressBar {
		return <P2vP2HPProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","P2vP2HPProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_player = this.getController("player");
		this.m_hero = this.getController("hero");

		
		this.m_bar = <fgui.GLoader><any>(this.getChild("bar"));
		
		
	}
}