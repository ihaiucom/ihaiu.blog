/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroInfoKey from "../../Extends/GameHome/HeroInfoKey";

export default class HeroInfoKeyStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrsqzy8q";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():HeroInfoKey {
		return <HeroInfoKey><any>(fgui.UIPackage.createObject("GameHome","HeroInfoKey"));
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