/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankDuelTempFameItem from "../../Extends/ModuleRank/RankDuelTempFameItem";

export default class RankDuelTempFameItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_name : fgui.GTextField;
	public m_times : fgui.GTextField;
	public m_server : fgui.GTextField;

	
	public static URL:string = "ui://47fv9ahvtdtf12";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempFameItem {
		return <RankDuelTempFameItem><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempFameItem"));
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
		this.m_times = <fgui.GTextField><any>(this.getChild("times"));
		this.m_server = <fgui.GTextField><any>(this.getChild("server"));
		
		
	}
}