/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonDialogBg from "../../Extends/ModuleLogin/CommonDialogBg";

export default class CommonDialogBgStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_btn_Close : fgui.GButton;

	
	public static URL:string = "ui://4698ugpkje283k";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():CommonDialogBg {
		return <CommonDialogBg><any>(fgui.UIPackage.createObject("ModuleLogin","CommonDialogBg"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_btn_Close = <fgui.GButton><any>(this.getChild("btn_Close"));
		
		
	}
}