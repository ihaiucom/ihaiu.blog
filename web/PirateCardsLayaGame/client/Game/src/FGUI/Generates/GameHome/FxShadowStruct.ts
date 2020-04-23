/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShadow from "../../Extends/GameHome/FxShadow";

export default class FxShadowStruct extends fgui.GComponent
{
	public m_anim : fgui.Transition;
	public m_shadow : fgui.GImage;

	
	public static URL:string = "ui://moe42ygrsqzy93";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxShadow {
		return <FxShadow><any>(fgui.UIPackage.createObject("GameHome","FxShadow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_shadow = <fgui.GImage><any>(this.getChild("shadow"));
		
		
		this.m_anim =  this.getTransition("anim");
	}
}