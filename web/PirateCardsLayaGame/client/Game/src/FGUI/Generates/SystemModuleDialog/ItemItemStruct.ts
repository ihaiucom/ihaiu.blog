/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemItem from "../../Extends/SystemModuleDialog/ItemItem";

export default class ItemItemStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://q5yddivtvbeyb";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():ItemItem {
		return <ItemItem><any>(fgui.UIPackage.createObject("SystemModuleDialog","ItemItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		
		
	}
}