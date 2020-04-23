/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopCardBack from "../../Extends/GameHome/ShopCardBack";

export default class ShopCardBackStruct extends fgui.GComponent
{
	public m_ShopType : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_backBtn : fgui.GButton;
	public m_heart : fgui.GComponent;
	public m_luck : fgui.GComponent;
	public m_key : fgui.GComponent;
	public m_horseshoe : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy95";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShopCardBack {
		return <ShopCardBack><any>(fgui.UIPackage.createObject("GameHome","ShopCardBack"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_ShopType = this.getController("ShopType");

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_backBtn = <fgui.GButton><any>(this.getChild("backBtn"));
		this.m_heart = <fgui.GComponent><any>(this.getChild("heart"));
		this.m_luck = <fgui.GComponent><any>(this.getChild("luck"));
		this.m_key = <fgui.GComponent><any>(this.getChild("key"));
		this.m_horseshoe = <fgui.GComponent><any>(this.getChild("horseshoe"));
		
		
	}
}