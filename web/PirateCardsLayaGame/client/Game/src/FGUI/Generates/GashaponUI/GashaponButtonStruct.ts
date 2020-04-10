/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponButton from "../../Extends/GashaponUI/GashaponButton";

export default class GashaponButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_isFree : fgui.Controller;
	public m_itemIcon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_countdownLb : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmqo9t1";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponButton {
		return <GashaponButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_isFree = this.getController("isFree");

		
		this.m_itemIcon = <fgui.GLoader><any>(this.getChild("itemIcon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_countdownLb = <fgui.GTextField><any>(this.getChild("countdownLb"));
		
		
	}
}