/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempLadderItem from "../../Extends/ModuleRank/RankDuelTempLadderItem";

export default class RankDuelTempLadderItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_name : fgui.GTextField;
	public m_danStar : fgui.GTextField;
	public m_server : fgui.GTextField;

	
	public static URL:string = "ui://47fv9ahvvdq7r";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempLadderItem {
		return <RankDuelTempLadderItem><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempLadderItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_danStar = <fgui.GTextField><any>(this.getChild("danStar"));
		this.m_server = <fgui.GTextField><any>(this.getChild("server"));
		
		
	}
}