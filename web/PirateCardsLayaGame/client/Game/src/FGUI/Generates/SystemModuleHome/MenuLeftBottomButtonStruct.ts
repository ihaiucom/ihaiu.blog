/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftBottomButton from "../../Extends/SystemModuleHome/MenuLeftBottomButton";

export default class MenuLeftBottomButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4sapkhzuhjoo18";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuLeftBottomButton {
		return <MenuLeftBottomButton><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuLeftBottomButton"));
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