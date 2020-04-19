/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialLoadBig from "../../Extends/GameHome/CPLockDialLoadBig";

export default class CPLockDialLoadBigStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;

	
	public static URL:string = "ui://moe42ygrjak7aw";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockDialLoadBig {
		return <CPLockDialLoadBig><any>(fgui.UIPackage.createObject("GameHome","CPLockDialLoadBig"));
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