/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectIcon from "../../Extends/GameHome/EquipSelectIcon";

export default class EquipSelectIconStruct extends fgui.GButton
{
	public m_itemType : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_iconCoin : fgui.GImage;
	public m_coinText : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrn2s1cr";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():EquipSelectIcon {
		return <EquipSelectIcon><any>(fgui.UIPackage.createObject("GameHome","EquipSelectIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemType = this.getController("itemType");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_iconCoin = <fgui.GImage><any>(this.getChild("iconCoin"));
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		
		
	}
}