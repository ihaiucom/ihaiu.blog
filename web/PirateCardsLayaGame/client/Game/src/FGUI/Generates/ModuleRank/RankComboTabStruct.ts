/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankComboTab from "../../Extends/ModuleRank/RankComboTab";

export default class RankComboTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://47fv9ahvjiiqy";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankComboTab {
		return <RankComboTab><any>(fgui.UIPackage.createObject("ModuleRank","RankComboTab"));
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