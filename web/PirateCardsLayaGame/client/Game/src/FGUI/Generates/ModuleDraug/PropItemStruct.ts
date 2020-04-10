/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PropItem from "../../Extends/ModuleDraug/PropItem";

export default class PropItemStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_labName : fgui.GTextField;
	public m_labValue : fgui.GTextField;
	public m_imgProperty : fgui.GLoader;

	
	public static URL:string = "ui://hc5dpgynqq5rd";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():PropItem {
		return <PropItem><any>(fgui.UIPackage.createObject("ModuleDraug","PropItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labValue = <fgui.GTextField><any>(this.getChild("labValue"));
		this.m_imgProperty = <fgui.GLoader><any>(this.getChild("imgProperty"));
		
		
	}
}