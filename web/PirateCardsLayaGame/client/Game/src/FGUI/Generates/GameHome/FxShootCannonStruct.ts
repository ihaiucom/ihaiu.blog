/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootCannon from "../../Extends/GameHome/FxShootCannon";

export default class FxShootCannonStruct extends fgui.GComponent
{
	public m_core : fgui.GImage;

	
	public static URL:string = "ui://moe42ygrsqzyaf";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShootCannon {
		return <FxShootCannon><any>(fgui.UIPackage.createObject("GameHome","FxShootCannon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_core = <fgui.GImage><any>(this.getChild("core"));
		
		
	}
}