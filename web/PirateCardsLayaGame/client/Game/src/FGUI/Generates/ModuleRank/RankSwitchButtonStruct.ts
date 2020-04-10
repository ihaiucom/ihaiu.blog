/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSwitchButton from "../../Extends/ModuleRank/RankSwitchButton";

export default class RankSwitchButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://47fv9ahvvdq7t";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankSwitchButton {
		return <RankSwitchButton><any>(fgui.UIPackage.createObject("ModuleRank","RankSwitchButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		
		
	}
}