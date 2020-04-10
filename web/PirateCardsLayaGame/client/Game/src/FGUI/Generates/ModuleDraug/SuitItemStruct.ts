/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SuitItem from "../../Extends/ModuleDraug/SuitItem";

export default class SuitItemStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_labNum : fgui.GTextField;
	public m_labName : fgui.GTextField;
	public m_labValue : fgui.GTextField;

	
	public static URL:string = "ui://hc5dpgynqq5re";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():SuitItem {
		return <SuitItem><any>(fgui.UIPackage.createObject("ModuleDraug","SuitItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labValue = <fgui.GTextField><any>(this.getChild("labValue"));
		
		
	}
}