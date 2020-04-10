/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSwitchButton from "../../Extends/ModuleRank/RankSwitchButton";
import RankSwitch from "../../Extends/ModuleRank/RankSwitch";

export default class RankSwitchStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;
	public m_right : RankSwitchButton;
	public m_left : RankSwitchButton;

	
	public static URL:string = "ui://47fv9ahvvdq7s";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankSwitch {
		return <RankSwitch><any>(fgui.UIPackage.createObject("ModuleRank","RankSwitch"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_right = <RankSwitchButton><any>(this.getChild("right"));
		this.m_left = <RankSwitchButton><any>(this.getChild("left"));
		
		
	}
}