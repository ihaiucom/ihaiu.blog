/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerEquipItem from "../../Extends/GamePlayerInfoUI/GamePlayerEquipItem";

export default class GamePlayerEquipItemStruct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_isShow : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_labLevel : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0ejwg1c";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerEquipItem {
		return <GamePlayerEquipItem><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerEquipItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Quality = this.getController("Quality");
		this.m_isShow = this.getController("isShow");

		
		this.m_imgQuality = <fgui.GLoader><any>(this.getChild("imgQuality"));
		this.m_imgItem = <fgui.GLoader><any>(this.getChild("imgItem"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		
		
	}
}