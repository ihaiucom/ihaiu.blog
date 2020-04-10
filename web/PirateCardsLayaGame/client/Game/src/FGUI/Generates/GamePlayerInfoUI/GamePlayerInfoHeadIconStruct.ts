/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoHeadIcon from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeadIcon";

export default class GamePlayerInfoHeadIconStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_iconBox : fgui.GLoader;

	
	public static URL:string = "ui://776a9nj0l6t9q";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerInfoHeadIcon {
		return <GamePlayerInfoHeadIcon><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_iconBox = <fgui.GLoader><any>(this.getChild("iconBox"));
		
		
	}
}