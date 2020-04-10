/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagComboBox_item from "../../Extends/ModuleBag/BagComboBox_item";

export default class BagComboBox_itemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4mjxxvpqphnv8";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():BagComboBox_item {
		return <BagComboBox_item><any>(fgui.UIPackage.createObject("ModuleBag","BagComboBox_item"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}