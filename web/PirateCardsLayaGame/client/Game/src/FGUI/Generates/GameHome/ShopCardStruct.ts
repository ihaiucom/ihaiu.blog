/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopCardBack from "../../Extends/GameHome/ShopCardBack";
import ShopCardFront from "../../Extends/GameHome/ShopCardFront";
import ShopCard from "../../Extends/GameHome/ShopCard";

export default class ShopCardStruct extends fgui.GComponent
{
	public m_ShopType : fgui.Controller;
	public m_back : ShopCardBack;
	public m_front : ShopCardFront;

	
	public static URL:string = "ui://moe42ygrsqzy8v";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShopCard {
		return <ShopCard><any>(fgui.UIPackage.createObject("GameHome","ShopCard"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_ShopType = this.getController("ShopType");

		
		this.m_back = <ShopCardBack><any>(this.getChild("back"));
		this.m_front = <ShopCardFront><any>(this.getChild("front"));
		
		
	}
}