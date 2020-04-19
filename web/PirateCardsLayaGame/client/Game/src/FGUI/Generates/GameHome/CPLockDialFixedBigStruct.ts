/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialFixedBig from "../../Extends/GameHome/CPLockDialFixedBig";

export default class CPLockDialFixedBigStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrjak7az";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockDialFixedBig {
		return <CPLockDialFixedBig><any>(fgui.UIPackage.createObject("GameHome","CPLockDialFixedBig"));
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