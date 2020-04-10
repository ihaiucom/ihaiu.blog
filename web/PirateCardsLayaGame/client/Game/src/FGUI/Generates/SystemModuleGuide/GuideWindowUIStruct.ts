/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrayMask from "../../Extends/SystemModuleGuide/GrayMask";
import GuideWindowUI from "../../Extends/SystemModuleGuide/GuideWindowUI";

export default class GuideWindowUIStruct extends fgui.GComponent
{
	public m_mask : GrayMask;

	
	public static URL:string = "ui://4bbdqtkimp8v4";
	
	public static DependPackages:string[] = ["SystemModuleGuide"];

	
	public static createInstance():GuideWindowUI {
		return <GuideWindowUI><any>(fgui.UIPackage.createObject("SystemModuleGuide","GuideWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_mask = <GrayMask><any>(this.getChild("mask"));
		
		
	}
}