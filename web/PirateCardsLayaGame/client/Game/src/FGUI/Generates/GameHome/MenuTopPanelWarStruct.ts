/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopPanelWar from "../../Extends/GameHome/MenuTopPanelWar";

export default class MenuTopPanelWarStruct extends fgui.GComponent
{
	public m_iconCoin : fgui.GImage;
	public m_coinText : fgui.GTextField;
	public m_countText : fgui.GTextField;
	public m_levelTex : fgui.GTextField;
	public m_levelKey : fgui.GTextField;
	public m_fxCoin : fgui.GMovieClip;
	public m_puaseBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy9e";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():MenuTopPanelWar {
		return <MenuTopPanelWar><any>(fgui.UIPackage.createObject("GameHome","MenuTopPanelWar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_iconCoin = <fgui.GImage><any>(this.getChild("iconCoin"));
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		this.m_countText = <fgui.GTextField><any>(this.getChild("countText"));
		this.m_levelTex = <fgui.GTextField><any>(this.getChild("levelTex"));
		this.m_levelKey = <fgui.GTextField><any>(this.getChild("levelKey"));
		this.m_fxCoin = <fgui.GMovieClip><any>(this.getChild("fxCoin"));
		this.m_puaseBtn = <fgui.GButton><any>(this.getChild("puaseBtn"));
		
		
	}
}