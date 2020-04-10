/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCommon2 from "../../Extends/CommonGame/ItemCommon2";

export default class ItemCommon2Struct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_Count : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgItem : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9folmz53";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemCommon2 {
		return <ItemCommon2><any>(fgui.UIPackage.createObject("CommonGame","ItemCommon2"));
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
		
		
	}
}