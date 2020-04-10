/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuCenterBar from "../../Extends/SystemModuleHome/MenuCenterBar";

export default class MenuCenterBarStruct extends fgui.GComponent
{
	public m_btnShow : fgui.GButton;

	
	public static URL:string = "ui://4sapkhzufasv1k";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuCenterBar {
		return <MenuCenterBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuCenterBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnShow = <fgui.GButton><any>(this.getChild("btnShow"));
		
		
	}
}