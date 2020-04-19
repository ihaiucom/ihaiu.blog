/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockLamp from "../../Extends/GameHome/CPLockLamp";

export default class CPLockLampStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_lighting : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrjak7ar";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockLamp {
		return <CPLockLamp><any>(fgui.UIPackage.createObject("GameHome","CPLockLamp"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_lighting = <fgui.GMovieClip><any>(this.getChild("lighting"));
		
		
	}
}