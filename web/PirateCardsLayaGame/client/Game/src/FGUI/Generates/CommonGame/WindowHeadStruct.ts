/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BackButton from "../../Extends/CommonBase/BackButton";
import HelpButton from "../../Extends/CommonBase/HelpButton";
import WindowHeadItem from "../../Extends/CommonGame/WindowHeadItem";
import WindowHead from "../../Extends/CommonGame/WindowHead";

export default class WindowHeadStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_btnReturn : BackButton;
	public m_btnHelp : HelpButton;
	public m_fatigue : WindowHeadItem;
	public m_coin : WindowHeadItem;
	public m_gold : WindowHeadItem;
	public m_draug : WindowHeadItem;

	
	public static URL:string = "ui://4snov4n9qq5r5";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():WindowHead {
		return <WindowHead><any>(fgui.UIPackage.createObject("CommonGame","WindowHead"));
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
		this.m_fatigue = <WindowHeadItem><any>(this.getChild("fatigue"));
		this.m_coin = <WindowHeadItem><any>(this.getChild("coin"));
		this.m_gold = <WindowHeadItem><any>(this.getChild("gold"));
		this.m_draug = <WindowHeadItem><any>(this.getChild("draug"));
		
		
	}
}