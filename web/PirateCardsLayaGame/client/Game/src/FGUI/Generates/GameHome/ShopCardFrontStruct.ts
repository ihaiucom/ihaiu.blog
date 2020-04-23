/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxSmallRing from "../../Extends/GameHome/FxSmallRing";
import ShopIcon from "../../Extends/GameHome/ShopIcon";
import ShopCardFront from "../../Extends/GameHome/ShopCardFront";

export default class ShopCardFrontStruct extends fgui.GComponent
{
	public m_ShopType : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_coinIcon : fgui.GImage;
	public m_coinText : fgui.GTextField;
	public m_coinGroup : fgui.GGroup;
	public m_hasFlag : fgui.GImage;
	public m_infoBtn : fgui.GButton;
	public m_fxSmallRing : FxSmallRing;
	public m_shopIcon : ShopIcon;
	public m_plusBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy94";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShopCardFront {
		return <ShopCardFront><any>(fgui.UIPackage.createObject("GameHome","ShopCardFront"));
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
		this.m_coinIcon = <fgui.GImage><any>(this.getChild("coinIcon"));
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		this.m_coinGroup = <fgui.GGroup><any>(this.getChild("coinGroup"));
		this.m_hasFlag = <fgui.GImage><any>(this.getChild("hasFlag"));
		this.m_infoBtn = <fgui.GButton><any>(this.getChild("infoBtn"));
		this.m_fxSmallRing = <FxSmallRing><any>(this.getChild("fxSmallRing"));
		this.m_shopIcon = <ShopIcon><any>(this.getChild("shopIcon"));
		this.m_plusBtn = <fgui.GButton><any>(this.getChild("plusBtn"));
		
		
	}
}