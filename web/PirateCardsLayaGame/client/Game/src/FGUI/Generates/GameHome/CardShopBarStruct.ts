/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardShopBar from "../../Extends/GameHome/CardShopBar";

export default class CardShopBarStruct extends fgui.GComponent
{
	public m_shopHeart : fgui.GImage;
	public m_shopHorseshoe : fgui.GImage;
	public m_shopLock : fgui.GImage;
	public m_shopKey : fgui.GImage;
	public m_fxHeart : fgui.GMovieClip;

	
	public static URL:string = "ui://moe42ygrsqzya1";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardShopBar {
		return <CardShopBar><any>(fgui.UIPackage.createObject("GameHome","CardShopBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_shopHeart = <fgui.GImage><any>(this.getChild("shopHeart"));
		this.m_shopHorseshoe = <fgui.GImage><any>(this.getChild("shopHorseshoe"));
		this.m_shopLock = <fgui.GImage><any>(this.getChild("shopLock"));
		this.m_shopKey = <fgui.GImage><any>(this.getChild("shopKey"));
		this.m_fxHeart = <fgui.GMovieClip><any>(this.getChild("fxHeart"));
		
		
	}
}