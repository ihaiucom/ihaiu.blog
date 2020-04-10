/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStar from "../../Extends/CommonGame/EquipStar";

export default class EquipStarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;

	
	public static URL:string = "ui://4snov4n9ja85g";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():EquipStar {
		return <EquipStar><any>(fgui.UIPackage.createObject("CommonGame","EquipStar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");

		
		
		
	}
}