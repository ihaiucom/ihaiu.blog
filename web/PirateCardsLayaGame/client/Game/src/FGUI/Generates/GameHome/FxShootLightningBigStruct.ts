/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootLightningBig from "../../Extends/GameHome/FxShootLightningBig";

export default class FxShootLightningBigStruct extends fgui.GComponent
{
	public m_fx : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzyai";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShootLightningBig {
		return <FxShootLightningBig><any>(fgui.UIPackage.createObject("GameHome","FxShootLightningBig"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_fx = <fgui.GMovieClip><any>(this.getChild("fx"));
		
		
	}
}