/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLHeroItem from "../../Extends/GameMatchUI/MatchLHeroItem";

export default class MatchLHeroItemStruct extends fgui.GComponent
{
	public m_imgHero : fgui.GLoader;

	
	public static URL:string = "ui://axwa07kx832rw2i";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():MatchLHeroItem {
		return <MatchLHeroItem><any>(fgui.UIPackage.createObject("GameMatchUI","MatchLHeroItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		
		
	}
}