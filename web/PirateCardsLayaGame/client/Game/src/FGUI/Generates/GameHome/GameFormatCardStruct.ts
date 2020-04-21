/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxSmallRing from "../../Extends/GameHome/FxSmallRing";
import ShopIcon from "../../Extends/GameHome/ShopIcon";
import GameFormatCard from "../../Extends/GameHome/GameFormatCard";

export default class GameFormatCardStruct extends fgui.GComponent
{
	public m_format : fgui.Controller;
	public m_bg : fgui.GImage;
	public m_coinIcon : fgui.GImage;
	public m_coinText : fgui.GTextField;
	public m_coinGroup : fgui.GGroup;
	public m_lock : fgui.GComponent;
	public m_plusBtn : fgui.GButton;
	public m_playBtn : fgui.GButton;
	public m_fxSmallRing : FxSmallRing;
	public m_icon : ShopIcon;

	
	public static URL:string = "ui://moe42ygrsqzy91";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():GameFormatCard {
		return <GameFormatCard><any>(fgui.UIPackage.createObject("GameHome","GameFormatCard"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_format = this.getController("format");

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_coinIcon = <fgui.GImage><any>(this.getChild("coinIcon"));
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		this.m_coinGroup = <fgui.GGroup><any>(this.getChild("coinGroup"));
		this.m_lock = <fgui.GComponent><any>(this.getChild("lock"));
		this.m_plusBtn = <fgui.GButton><any>(this.getChild("plusBtn"));
		this.m_playBtn = <fgui.GButton><any>(this.getChild("playBtn"));
		this.m_fxSmallRing = <FxSmallRing><any>(this.getChild("fxSmallRing"));
		this.m_icon = <ShopIcon><any>(this.getChild("icon"));
		
		
	}
}