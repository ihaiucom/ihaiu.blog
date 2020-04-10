/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempBackground from "../../Extends/CommonGame/DuelTempBackground";

export default class DuelTempBackgroundStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://4snov4n9inki1c";
	
	public static DependPackages:string[] = ["CommonGame","_ResImagePic"];

	
	public static createInstance():DuelTempBackground {
		return <DuelTempBackground><any>(fgui.UIPackage.createObject("CommonGame","DuelTempBackground"));
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