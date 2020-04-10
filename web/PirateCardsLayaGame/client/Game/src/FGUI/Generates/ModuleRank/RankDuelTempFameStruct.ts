/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSwitch from "../../Extends/ModuleRank/RankSwitch";
import RankDuelTempFame from "../../Extends/ModuleRank/RankDuelTempFame";

export default class RankDuelTempFameStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_rankLb : fgui.GTextField;
	public m_switch : RankSwitch;

	
	public static URL:string = "ui://47fv9ahvtdtf11";
	
	public static DependPackages:string[] = ["ModuleRank","CommonGame"];

	
	public static createInstance():RankDuelTempFame {
		return <RankDuelTempFame><any>(fgui.UIPackage.createObject("ModuleRank","RankDuelTempFame"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_rankLb = <fgui.GTextField><any>(this.getChild("rankLb"));
		this.m_switch = <RankSwitch><any>(this.getChild("switch"));
		
		
	}
}