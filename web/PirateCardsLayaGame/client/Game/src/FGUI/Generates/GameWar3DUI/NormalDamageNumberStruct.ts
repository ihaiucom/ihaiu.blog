/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NormalDamageNumber from "../../Extends/GameWar3DUI/NormalDamageNumber";

export default class NormalDamageNumberStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_otext : fgui.GTextField;
	public m_stext : fgui.GTextField;

	
	public static URL:string = "ui://yhpe9txzs4zr6w";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():NormalDamageNumber {
		return <NormalDamageNumber><any>(fgui.UIPackage.createObject("GameWar3DUI","NormalDamageNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_otext = <fgui.GTextField><any>(this.getChild("otext"));
		this.m_stext = <fgui.GTextField><any>(this.getChild("stext"));
		
		
	}
}