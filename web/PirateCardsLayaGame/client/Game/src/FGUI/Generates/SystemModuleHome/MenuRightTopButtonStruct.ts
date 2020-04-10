/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightTopButton from "../../Extends/SystemModuleHome/MenuRightTopButton";

export default class MenuRightTopButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Menu : fgui.Controller;
	public m_Add : fgui.Controller;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://4sapkhzumtnh1c";
	
	public static DependPackages:string[] = ["SystemModuleHome","CommonGame"];

	
	public static createInstance():MenuRightTopButton {
		return <MenuRightTopButton><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuRightTopButton"));
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