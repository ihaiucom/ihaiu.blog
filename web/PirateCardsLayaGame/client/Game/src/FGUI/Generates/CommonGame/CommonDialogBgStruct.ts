/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonDialogBg from "../../Extends/CommonGame/CommonDialogBg";

export default class CommonDialogBgStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_btn_Close : CloseButton;

	
	public static URL:string = "ui://4snov4n9pwntz5f";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():CommonDialogBg {
		return <CommonDialogBg><any>(fgui.UIPackage.createObject("CommonGame","CommonDialogBg"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_btn_Close = <CloseButton><any>(this.getChild("btn_Close"));
		
		
	}
}