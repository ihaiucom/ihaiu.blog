/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftTopBar from "../../Extends/SystemModuleHome/MenuLeftTopBar";

export default class MenuLeftTopBarStruct extends fgui.GComponent
{
	public m_listMenu : fgui.GList;

	
	public static URL:string = "ui://4sapkhzufasv1j";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuLeftTopBar {
		return <MenuLeftTopBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuLeftTopBar"));
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