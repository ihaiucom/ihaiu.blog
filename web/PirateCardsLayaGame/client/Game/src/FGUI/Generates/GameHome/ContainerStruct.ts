/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Container from "../../Extends/GameHome/Container";

export default class ContainerStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://moe42ygrsqzya7";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():Container {
		return <Container><any>(fgui.UIPackage.createObject("GameHome","Container"));
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