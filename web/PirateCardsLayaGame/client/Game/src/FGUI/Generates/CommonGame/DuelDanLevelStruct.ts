/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelDanLevel from "../../Extends/CommonGame/DuelDanLevel";

export default class DuelDanLevelStruct extends fgui.GComponent
{
	public m_DanIcon : fgui.GLoader;
	public m_danName : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9inki1n";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():DuelDanLevel {
		return <DuelDanLevel><any>(fgui.UIPackage.createObject("CommonGame","DuelDanLevel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_DanIcon = <fgui.GLoader><any>(this.getChild("DanIcon"));
		this.m_danName = <fgui.GTextField><any>(this.getChild("danName"));
		
		
	}
}