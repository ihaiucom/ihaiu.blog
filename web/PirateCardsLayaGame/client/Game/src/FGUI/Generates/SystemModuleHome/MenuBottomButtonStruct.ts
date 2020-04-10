/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBottomButton from "../../Extends/SystemModuleHome/MenuBottomButton";

export default class MenuBottomButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Menu : fgui.Controller;

	
	public static URL:string = "ui://4sapkhzuhjoo13";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuBottomButton {
		return <MenuBottomButton><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuBottomButton"));
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

		
		
		
	}
}