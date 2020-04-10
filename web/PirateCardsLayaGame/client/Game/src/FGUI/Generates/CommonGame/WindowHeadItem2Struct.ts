/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHeadItem2 from "../../Extends/CommonGame/WindowHeadItem2";

export default class WindowHeadItem2Struct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Menu : fgui.Controller;
	public m_Add : fgui.Controller;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9hca8z5t";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():WindowHeadItem2 {
		return <WindowHeadItem2><any>(fgui.UIPackage.createObject("CommonGame","WindowHeadItem2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_Menu = this.getController("Menu");
		this.m_Add = this.getController("Add");

		
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		
		
	}
}