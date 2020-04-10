/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Gashapon10Button from "../../Extends/GashaponUI/Gashapon10Button";

export default class Gashapon10ButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_showTop : fgui.Controller;
	public m_itemIcon : fgui.GLoader;
	public m_num : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmqo9t2";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():Gashapon10Button {
		return <Gashapon10Button><any>(fgui.UIPackage.createObject("GashaponUI","Gashapon10Button"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_showTop = this.getController("showTop");

		
		this.m_itemIcon = <fgui.GLoader><any>(this.getChild("itemIcon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		
		
	}
}