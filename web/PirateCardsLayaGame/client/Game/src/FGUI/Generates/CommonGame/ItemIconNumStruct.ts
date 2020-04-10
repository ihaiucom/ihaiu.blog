/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemIconNum from "../../Extends/CommonGame/ItemIconNum";

export default class ItemIconNumStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9mm04c";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemIconNum {
		return <ItemIconNum><any>(fgui.UIPackage.createObject("CommonGame","ItemIconNum"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		
		
	}
}