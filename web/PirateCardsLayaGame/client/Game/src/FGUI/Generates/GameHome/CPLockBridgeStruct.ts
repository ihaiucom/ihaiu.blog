/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockBridge from "../../Extends/GameHome/CPLockBridge";

export default class CPLockBridgeStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;

	
	public static URL:string = "ui://moe42ygrjak7as";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockBridge {
		return <CPLockBridge><any>(fgui.UIPackage.createObject("GameHome","CPLockBridge"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		
		
	}
}