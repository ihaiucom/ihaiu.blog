/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootSmoke from "../../Extends/GameHome/FxShootSmoke";

export default class FxShootSmokeStruct extends fgui.GComponent
{
	public m_smoke : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzyag";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShootSmoke {
		return <FxShootSmoke><any>(fgui.UIPackage.createObject("GameHome","FxShootSmoke"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_smoke = <fgui.GMovieClip><any>(this.getChild("smoke"));
		
		
	}
}