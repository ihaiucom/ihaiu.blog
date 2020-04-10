/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBottomBar from "../../Extends/SystemModuleHome/MenuBottomBar";

export default class MenuBottomBarStruct extends fgui.GComponent
{
	public m_listMenu : fgui.GList;
	public m_btnStart : fgui.GButton;

	
	public static URL:string = "ui://4sapkhzuhjoo14";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuBottomBar {
		return <MenuBottomBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuBottomBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listMenu = <fgui.GList><any>(this.getChild("listMenu"));
		this.m_btnStart = <fgui.GButton><any>(this.getChild("btnStart"));
		
		
	}
}