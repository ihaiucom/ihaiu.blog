/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";

export default class PanelMainMenuStruct extends fgui.GComponent
{
	public m_menuLogo : fgui.GComponent;
	public m_btnBar : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy7q";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelMainMenu {
		return <PanelMainMenu><any>(fgui.UIPackage.createObject("GameHome","PanelMainMenu"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_menuLogo = <fgui.GComponent><any>(this.getChild("menuLogo"));
		this.m_btnBar = <fgui.GComponent><any>(this.getChild("btnBar"));
		
		
	}
}