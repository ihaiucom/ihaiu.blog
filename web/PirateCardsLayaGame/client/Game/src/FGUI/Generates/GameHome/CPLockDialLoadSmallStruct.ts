/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialLoadSmall from "../../Extends/GameHome/CPLockDialLoadSmall";

export default class CPLockDialLoadSmallStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;

	
	public static URL:string = "ui://moe42ygrjak7ax";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockDialLoadSmall {
		return <CPLockDialLoadSmall><any>(fgui.UIPackage.createObject("GameHome","CPLockDialLoadSmall"));
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