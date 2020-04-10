/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugTypeItem from "../../Extends/ModuleDraug/DraugTypeItem";

export default class DraugTypeItemStruct extends fgui.GComponent
{
	public m_Had : fgui.Controller;
	public m_imgBg : fgui.GImage;
	public m_imgDraug : fgui.GLoader;
	public m_labName : fgui.GTextField;
	public m_labNum : fgui.GTextField;
	public m_labSuit : fgui.GTextField;

	
	public static URL:string = "ui://hc5dpgynyt2lr";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():DraugTypeItem {
		return <DraugTypeItem><any>(fgui.UIPackage.createObject("ModuleDraug","DraugTypeItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Had = this.getController("Had");

		
		this.m_imgBg = <fgui.GImage><any>(this.getChild("imgBg"));
		this.m_imgDraug = <fgui.GLoader><any>(this.getChild("imgDraug"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		this.m_labSuit = <fgui.GTextField><any>(this.getChild("labSuit"));
		
		
	}
}