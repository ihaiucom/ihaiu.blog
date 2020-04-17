/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardView from "../../Extends/GameHome/CardView";

export default class CardViewStruct extends fgui.GButton
{

	
	public static URL:string = "ui://moe42ygrsqzy9s";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardView {
		return <CardView><any>(fgui.UIPackage.createObject("GameHome","CardView"));
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