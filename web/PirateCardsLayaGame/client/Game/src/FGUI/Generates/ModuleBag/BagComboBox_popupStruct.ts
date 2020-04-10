/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagComboBox_popup from "../../Extends/ModuleBag/BagComboBox_popup";

export default class BagComboBox_popupStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://4mjxxvpqphnv9";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():BagComboBox_popup {
		return <BagComboBox_popup><any>(fgui.UIPackage.createObject("ModuleBag","BagComboBox_popup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}