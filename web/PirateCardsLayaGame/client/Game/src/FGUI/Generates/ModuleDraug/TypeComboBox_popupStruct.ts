/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeComboBox_popup from "../../Extends/ModuleDraug/TypeComboBox_popup";

export default class TypeComboBox_popupStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://hc5dpgynqq5rp";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():TypeComboBox_popup {
		return <TypeComboBox_popup><any>(fgui.UIPackage.createObject("ModuleDraug","TypeComboBox_popup"));
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