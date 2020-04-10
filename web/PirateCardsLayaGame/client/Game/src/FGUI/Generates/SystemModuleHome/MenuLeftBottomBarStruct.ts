/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftBottomBar from "../../Extends/SystemModuleHome/MenuLeftBottomBar";

export default class MenuLeftBottomBarStruct extends fgui.GComponent
{
	public m_listMenu : fgui.GList;

	
	public static URL:string = "ui://4sapkhzuhjoo17";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuLeftBottomBar {
		return <MenuLeftBottomBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuLeftBottomBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listMenu = <fgui.GList><any>(this.getChild("listMenu"));
		
		
	}
}