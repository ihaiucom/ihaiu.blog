/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerHead2 from "../../Extends/GamePlayerInfoUI/GamePlayerHead2";
import HeroStar from "../../Extends/CommonGame/HeroStar";
import GamePlayerInfoHeroListItem from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroListItem";

export default class GamePlayerInfoHeroListItemStruct extends fgui.GComponent
{
	public m_bgType : fgui.Controller;
	public m_nameLb : fgui.GTextField;
	public m_equipList : fgui.GList;
	public m_draugList : fgui.GList;
	public m_headIcon : GamePlayerHead2;
	public m_star : HeroStar;

	
	public static URL:string = "ui://776a9nj0lzv98";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonGame"];

	
	public static createInstance():GamePlayerInfoHeroListItem {
		return <GamePlayerInfoHeroListItem><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoHeroListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_bgType = this.getController("bgType");

		
		this.m_nameLb = <fgui.GTextField><any>(this.getChild("nameLb"));
		this.m_equipList = <fgui.GList><any>(this.getChild("equipList"));
		this.m_draugList = <fgui.GList><any>(this.getChild("draugList"));
		this.m_headIcon = <GamePlayerHead2><any>(this.getChild("headIcon"));
		this.m_star = <HeroStar><any>(this.getChild("star"));
		
		
	}
}