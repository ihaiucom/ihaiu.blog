/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftTopButton from "../../Extends/SystemModuleHome/MenuLeftTopButton";

export default class MenuLeftTopButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4sapkhzufasv1i";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuLeftTopButton {
		return <MenuLeftTopButton><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuLeftTopButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}