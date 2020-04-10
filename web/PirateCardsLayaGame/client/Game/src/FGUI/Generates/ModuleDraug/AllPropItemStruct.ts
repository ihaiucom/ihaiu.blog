/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AllPropItem from "../../Extends/ModuleDraug/AllPropItem";

export default class AllPropItemStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;
	public m_labValue : fgui.GTextField;
	public m_imgProperty : fgui.GLoader;

	
	public static URL:string = "ui://hc5dpgyni2zs3f";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():AllPropItem {
		return <AllPropItem><any>(fgui.UIPackage.createObject("ModuleDraug","AllPropItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labValue = <fgui.GTextField><any>(this.getChild("labValue"));
		this.m_imgProperty = <fgui.GLoader><any>(this.getChild("imgProperty"));
		
		
	}
}