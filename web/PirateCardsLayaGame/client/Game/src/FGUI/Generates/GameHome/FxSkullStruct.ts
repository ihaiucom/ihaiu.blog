/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxSkull from "../../Extends/GameHome/FxSkull";

export default class FxSkullStruct extends fgui.GComponent
{
	public m_fx : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzyam";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxSkull {
		return <FxSkull><any>(fgui.UIPackage.createObject("GameHome","FxSkull"));
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