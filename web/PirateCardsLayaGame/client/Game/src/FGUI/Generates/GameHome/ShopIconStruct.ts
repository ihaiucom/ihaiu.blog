/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopIcon from "../../Extends/GameHome/ShopIcon";

export default class ShopIconStruct extends fgui.GLabel
{
	public m_anim : fgui.Transition;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrsqzy8x";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShopIcon {
		return <ShopIcon><any>(fgui.UIPackage.createObject("GameHome","ShopIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
		this.m_anim =  this.getTransition("anim");
	}
}