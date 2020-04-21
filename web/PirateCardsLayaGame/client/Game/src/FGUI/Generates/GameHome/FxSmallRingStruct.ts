/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxSmallRing from "../../Extends/GameHome/FxSmallRing";

export default class FxSmallRingStruct extends fgui.GComponent
{
	public m_anim : fgui.Transition;
	public m_shadow : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy8w";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():FxSmallRing {
		return <FxSmallRing><any>(fgui.UIPackage.createObject("GameHome","FxSmallRing"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_shadow = <fgui.GComponent><any>(this.getChild("shadow"));
		
		
		this.m_anim =  this.getTransition("anim");
	}
}