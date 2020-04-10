/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerDraugItem from "../../Extends/GamePlayerInfoUI/GamePlayerDraugItem";

export default class GamePlayerDraugItemStruct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_isShow : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_labLevel : fgui.GTextField;

	
	public static URL:string = "ui://776a9nj0eg2lz";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerDraugItem {
		return <GamePlayerDraugItem><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerDraugItem"));
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