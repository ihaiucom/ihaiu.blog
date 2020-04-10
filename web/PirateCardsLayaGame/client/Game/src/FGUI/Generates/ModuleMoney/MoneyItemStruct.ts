/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyItem from "../../Extends/ModuleMoney/MoneyItem";

export default class MoneyItemStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;

	
	public static URL:string = "ui://mwn8bfqlovfrf";
	
	public static DependPackages:string[] = ["ModuleMoney"];

	
	public static createInstance():MoneyItem {
		return <MoneyItem><any>(fgui.UIPackage.createObject("ModuleMoney","MoneyItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		
		
	}
}