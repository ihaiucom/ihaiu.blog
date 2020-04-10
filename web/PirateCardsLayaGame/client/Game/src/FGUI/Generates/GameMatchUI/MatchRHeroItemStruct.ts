/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchRHeroItem from "../../Extends/GameMatchUI/MatchRHeroItem";

export default class MatchRHeroItemStruct extends fgui.GComponent
{
	public m_imgHero : fgui.GLoader;

	
	public static URL:string = "ui://axwa07kx832rw2q";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():MatchRHeroItem {
		return <MatchRHeroItem><any>(fgui.UIPackage.createObject("GameMatchUI","MatchRHeroItem"));
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