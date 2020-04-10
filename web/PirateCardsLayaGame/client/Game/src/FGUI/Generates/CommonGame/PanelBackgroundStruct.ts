/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelBackground from "../../Extends/CommonGame/PanelBackground";

export default class PanelBackgroundStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://4snov4n9wdlfv";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():PanelBackground {
		return <PanelBackground><any>(fgui.UIPackage.createObject("CommonGame","PanelBackground"));
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