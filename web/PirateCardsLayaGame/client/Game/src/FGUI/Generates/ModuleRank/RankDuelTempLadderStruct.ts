/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSwitch from "../../Extends/ModuleRank/RankSwitch";
import RankDuelTempLadder from "../../Extends/ModuleRank/RankDuelTempLadder";

export default class RankDuelTempLadderStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_list : fgui.GList;
	public m_rankLb : fgui.GTextField;
	public m_switch : RankSwitch;

	
	public static URL:string = "ui://47fv9ahvvdq7q";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempLadder {
		return <RankDuelTempLadder><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempLadder"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_rankLb = <fgui.GTextField><any>(this.getChild("rankLb"));
		this.m_switch = <RankSwitch><any>(this.getChild("switch"));
		
		
	}
}