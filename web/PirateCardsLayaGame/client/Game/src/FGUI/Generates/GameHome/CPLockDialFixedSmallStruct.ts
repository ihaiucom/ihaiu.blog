/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialFixedSmall from "../../Extends/GameHome/CPLockDialFixedSmall";

export default class CPLockDialFixedSmallStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrjak7ay";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockDialFixedSmall {
		return <CPLockDialFixedSmall><any>(fgui.UIPackage.createObject("GameHome","CPLockDialFixedSmall"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}