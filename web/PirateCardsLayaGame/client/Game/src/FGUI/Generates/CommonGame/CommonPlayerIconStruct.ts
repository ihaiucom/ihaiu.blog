/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonPlayerIcon from "../../Extends/CommonGame/CommonPlayerIcon";

export default class CommonPlayerIconStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_iconBox : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9t43kz5m";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommonPlayerIcon {
		return <CommonPlayerIcon><any>(fgui.UIPackage.createObject("CommonGame","CommonPlayerIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_iconBox = <fgui.GLoader><any>(this.getChild("iconBox"));
		
		
	}
}