/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Background from "../../Extends/ModuleSecretLand/Background";

export default class BackgroundStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://62v5hdr0klnx2w";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonGame"];

	
	public static createInstance():Background {
		return <Background><any>(fgui.UIPackage.createObject("ModuleSecretLand","background"));
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