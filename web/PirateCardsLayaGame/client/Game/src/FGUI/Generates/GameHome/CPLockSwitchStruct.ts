/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockArrow from "../../Extends/GameHome/CPLockArrow";
import CPLockSwitch from "../../Extends/GameHome/CPLockSwitch";

export default class CPLockSwitchStruct extends fgui.GComponent
{
	public m_button : fgui.Controller;
	public m_arrow : CPLockArrow;

	
	public static URL:string = "ui://moe42ygrjak7at";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockSwitch {
		return <CPLockSwitch><any>(fgui.UIPackage.createObject("GameHome","CPLockSwitch"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_arrow = <CPLockArrow><any>(this.getChild("arrow"));
		
		
	}
}