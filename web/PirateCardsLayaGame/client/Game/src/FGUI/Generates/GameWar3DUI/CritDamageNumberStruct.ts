/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CritDamageNumber from "../../Extends/GameWar3DUI/CritDamageNumber";

export default class CritDamageNumberStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_stext : fgui.GTextField;
	public m_otext : fgui.GTextField;

	
	public static URL:string = "ui://yhpe9txzs4zr6x";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():CritDamageNumber {
		return <CritDamageNumber><any>(fgui.UIPackage.createObject("GameWar3DUI","CritDamageNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_stext = <fgui.GTextField><any>(this.getChild("stext"));
		this.m_otext = <fgui.GTextField><any>(this.getChild("otext"));
		
		
	}
}