/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemStar from "../../Extends/CommonGame/ItemStar";

export default class ItemStarStruct extends fgui.GComponent
{
	public m_StarNumber : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9skmah";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemStar {
		return <ItemStar><any>(fgui.UIPackage.createObject("CommonGame","ItemStar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_StarNumber = this.getController("StarNumber");

		
		
		
	}
}