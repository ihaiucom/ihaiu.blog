/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemTipsMask from "../../Extends/CommonGame/ItemTipsMask";

export default class ItemTipsMaskStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9phnv9";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemTipsMask {
		return <ItemTipsMask><any>(fgui.UIPackage.createObject("CommonGame","ItemTipsMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}