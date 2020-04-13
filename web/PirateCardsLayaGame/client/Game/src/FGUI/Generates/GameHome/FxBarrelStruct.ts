/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxBarrel from "../../Extends/GameHome/FxBarrel";

export default class FxBarrelStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrsqzy9g";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxBarrel {
		return <FxBarrel><any>(fgui.UIPackage.createObject("GameHome","FxBarrel"));
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