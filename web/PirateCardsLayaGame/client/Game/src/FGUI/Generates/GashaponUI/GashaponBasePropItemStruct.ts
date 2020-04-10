/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponBasePropItem from "../../Extends/GashaponUI/GashaponBasePropItem";

export default class GashaponBasePropItemStruct extends fgui.GComponent
{
	public m_propType : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_prop : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmnsaz1p";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponBasePropItem {
		return <GashaponBasePropItem><any>(fgui.UIPackage.createObject("GashaponUI","GashaponBasePropItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_propType = this.getController("propType");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_prop = <fgui.GTextField><any>(this.getChild("prop"));
		
		
	}
}