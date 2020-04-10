/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSeasonTitleView from "../../Extends/ModuleRank/RankSeasonTitleView";

export default class RankSeasonTitleViewStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://47fv9ahv9rey10";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankSeasonTitleView {
		return <RankSeasonTitleView><any>(fgui.UIPackage.createObject("ModuleRank","RankSeasonTitleView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}