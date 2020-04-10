/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankComboItem from "../../Extends/ModuleRank/RankComboItem";

export default class RankComboItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://47fv9ahvjiiqz";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankComboItem {
		return <RankComboItem><any>(fgui.UIPackage.createObject("ModuleRank","RankComboItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}