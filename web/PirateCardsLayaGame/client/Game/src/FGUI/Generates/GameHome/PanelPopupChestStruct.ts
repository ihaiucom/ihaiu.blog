/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import CPLock from "../../Extends/GameHome/CPLock";
import PanelPopupChest from "../../Extends/GameHome/PanelPopupChest";

export default class PanelPopupChestStruct extends fgui.GComponent
{
	public m_bg : ScreenBG;
	public m_lock : CPLock;

	
	public static URL:string = "ui://moe42ygrjak7ao";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():PanelPopupChest {
		return <PanelPopupChest><any>(fgui.UIPackage.createObject("GameHome","PanelPopupChest"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_lock = <CPLock><any>(this.getChild("lock"));
		
		
	}
}