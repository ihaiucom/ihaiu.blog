/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SpriteBoss from "../../Extends/GameHome/SpriteBoss";

export default class SpriteBossStruct extends fgui.GLabel
{
	public m_sprite : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrsqzya5";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():SpriteBoss {
		return <SpriteBoss><any>(fgui.UIPackage.createObject("GameHome","SpriteBoss"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_sprite = this.getController("sprite");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}