/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCommon3 from "../../Extends/CommonGame/ItemCommon3";

export default class ItemCommon3Struct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_Count : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9nsazz54";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemCommon3 {
		return <ItemCommon3><any>(fgui.UIPackage.createObject("CommonGame","ItemCommon3"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Quality = this.getController("Quality");
		this.m_Count = this.getController("Count");

		
		this.m_imgQuality = <fgui.GLoader><any>(this.getChild("imgQuality"));
		this.m_imgItem = <fgui.GLoader><any>(this.getChild("imgItem"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		
		
	}
}