/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootLightningSmall from "../../Extends/GameHome/FxShootLightningSmall";

export default class FxShootLightningSmallStruct extends fgui.GComponent
{
	public m_fx : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzyal";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShootLightningSmall {
		return <FxShootLightningSmall><any>(fgui.UIPackage.createObject("GameHome","FxShootLightningSmall"));
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