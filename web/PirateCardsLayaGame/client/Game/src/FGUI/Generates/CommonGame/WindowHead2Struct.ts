/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BackButton from "../../Extends/CommonBase/BackButton";
import HelpButton from "../../Extends/CommonBase/HelpButton";
import WindowHeadItem2 from "../../Extends/CommonGame/WindowHeadItem2";
import WindowHead2 from "../../Extends/CommonGame/WindowHead2";

export default class WindowHead2Struct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_btnReturn : BackButton;
	public m_btnHelp : HelpButton;
	public m_fatigue : WindowHeadItem2;
	public m_coin : WindowHeadItem2;
	public m_gold : WindowHeadItem2;
	public m_draug : WindowHeadItem2;
	public m_roll : WindowHeadItem2;

	
	public static URL:string = "ui://4snov4n9hca8z5r";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():WindowHead2 {
		return <WindowHead2><any>(fgui.UIPackage.createObject("CommonGame","WindowHead2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_btnReturn = <BackButton><any>(this.getChild("btnReturn"));
		this.m_btnHelp = <HelpButton><any>(this.getChild("btnHelp"));
		this.m_fatigue = <WindowHeadItem2><any>(this.getChild("fatigue"));
		this.m_coin = <WindowHeadItem2><any>(this.getChild("coin"));
		this.m_gold = <WindowHeadItem2><any>(this.getChild("gold"));
		this.m_draug = <WindowHeadItem2><any>(this.getChild("draug"));
		this.m_roll = <WindowHeadItem2><any>(this.getChild("roll"));
		
		
	}
}