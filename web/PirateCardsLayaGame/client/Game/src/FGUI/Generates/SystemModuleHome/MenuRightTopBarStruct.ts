/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightTopBar from "../../Extends/SystemModuleHome/MenuRightTopBar";

export default class MenuRightTopBarStruct extends fgui.GComponent
{
	public m_listMenu : fgui.GList;

	
	public static URL:string = "ui://4sapkhzumtnh1d";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuRightTopBar {
		return <MenuRightTopBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuRightTopBar"));
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