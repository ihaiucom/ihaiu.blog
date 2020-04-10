/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Bg from "../../Extends/SystemModuleDialog/Bg";

export default class BgStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://q5yddivts0xqh";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():Bg {
		return <Bg><any>(fgui.UIPackage.createObject("SystemModuleDialog","Bg"));
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