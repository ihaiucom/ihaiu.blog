/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowRed from "../../Extends/CommonGame/WindowRed";

export default class WindowRedStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9jgz47";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():WindowRed {
		return <WindowRed><any>(fgui.UIPackage.createObject("CommonGame","WindowRed"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		
		
	}
}