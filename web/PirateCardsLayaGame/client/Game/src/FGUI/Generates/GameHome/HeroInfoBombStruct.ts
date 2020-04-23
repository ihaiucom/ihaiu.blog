/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroInfoBomb from "../../Extends/GameHome/HeroInfoBomb";

export default class HeroInfoBombStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrsqzy8s";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():HeroInfoBomb {
		return <HeroInfoBomb><any>(fgui.UIPackage.createObject("GameHome","HeroInfoBomb"));
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