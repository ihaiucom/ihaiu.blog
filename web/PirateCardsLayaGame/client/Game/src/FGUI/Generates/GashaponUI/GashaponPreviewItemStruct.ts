/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponPreviewItem from "../../Extends/GashaponUI/GashaponPreviewItem";

export default class GashaponPreviewItemStruct extends fgui.GLabel
{
	public m_type : fgui.Controller;
	public m_list : fgui.GList;
	public m_chance : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmjgfw4";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponPreviewItem {
		return <GashaponPreviewItem><any>(fgui.UIPackage.createObject("GashaponUI","GashaponPreviewItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_chance = <fgui.GTextField><any>(this.getChild("chance"));
		
		
	}
}