/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13002_321go from "../../Extends/Effect_13002_321go/Effect_13002_321go";

export default class Effect_13002_321goStruct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;

	
	public static URL:string = "ui://fz2l9gbioxr79";
	
	public static DependPackages:string[] = ["Effect_13002_321go"];

	
	public static createInstance():Effect_13002_321go {
		return <Effect_13002_321go><any>(fgui.UIPackage.createObject("Effect_13002_321go","Effect_13002_321go"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}