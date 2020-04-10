/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopButton from "../../Extends/SystemModuleHome/MenuTopButton";

export default class MenuTopButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4sapkhzumtnh1e";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuTopButton {
		return <MenuTopButton><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuTopButton"));
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