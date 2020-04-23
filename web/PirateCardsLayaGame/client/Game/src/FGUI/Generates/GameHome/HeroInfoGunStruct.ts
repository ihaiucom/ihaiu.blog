/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroInfoGun from "../../Extends/GameHome/HeroInfoGun";

export default class HeroInfoGunStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrsqzy8t";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():HeroInfoGun {
		return <HeroInfoGun><any>(fgui.UIPackage.createObject("GameHome","HeroInfoGun"));
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