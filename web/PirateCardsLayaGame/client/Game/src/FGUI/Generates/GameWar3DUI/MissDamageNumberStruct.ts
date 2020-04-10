/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MissDamageNumber from "../../Extends/GameWar3DUI/MissDamageNumber";

export default class MissDamageNumberStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://yhpe9txzs4zr71";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():MissDamageNumber {
		return <MissDamageNumber><any>(fgui.UIPackage.createObject("GameWar3DUI","MissDamageNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		
		
	}
}