/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelBackboard from "../../Extends/ModuleBag/PanelBackboard";

export default class PanelBackboardStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://4mjxxvpqx97l1i";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():PanelBackboard {
		return <PanelBackboard><any>(fgui.UIPackage.createObject("ModuleBag","PanelBackboard"));
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