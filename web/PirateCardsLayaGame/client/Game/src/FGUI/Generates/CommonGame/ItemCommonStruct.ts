/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCommon from "../../Extends/CommonGame/ItemCommon";

export default class ItemCommonStruct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_Count : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_labNum : fgui.GTextField;
	public m_labName : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9tzxb12";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemCommon {
		return <ItemCommon><any>(fgui.UIPackage.createObject("CommonGame","ItemCommon"));
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
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		
		
	}
}