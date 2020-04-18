/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootBoom from "../../Extends/GameHome/FxShootBoom";

export default class FxShootBoomStruct extends fgui.GComponent
{
	public m_boom : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzyah";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShootBoom {
		return <FxShootBoom><any>(fgui.UIPackage.createObject("GameHome","FxShootBoom"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_boom = <fgui.GMovieClip><any>(this.getChild("boom"));
		
		
	}
}