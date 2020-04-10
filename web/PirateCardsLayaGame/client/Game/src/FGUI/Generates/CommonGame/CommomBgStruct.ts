/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommomBg from "../../Extends/CommonGame/CommomBg";

export default class CommomBgStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://4snov4n9tilsz5w";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():CommomBg {
		return <CommomBg><any>(fgui.UIPackage.createObject("CommonGame","CommomBg"));
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