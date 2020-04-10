/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrayMask from "../../Extends/SystemModuleGuide/GrayMask";

export default class GrayMaskStruct extends fgui.GComponent
{
	public m_mask : fgui.GGraph;

	
	public static URL:string = "ui://4bbdqtkibtb00";
	
	public static DependPackages:string[] = ["SystemModuleGuide"];

	
	public static createInstance():GrayMask {
		return <GrayMask><any>(fgui.UIPackage.createObject("SystemModuleGuide","GrayMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_mask = <fgui.GGraph><any>(this.getChild("mask"));
		
		
	}
}