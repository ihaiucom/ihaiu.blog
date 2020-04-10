/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanListItem2 from "../../Extends/ModuleDuelTemp/DuelTempDanListItem2";

export default class DuelTempDanListItem2Struct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://rx0filvj9reyk";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempDanListItem2 {
		return <DuelTempDanListItem2><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempDanListItem2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}