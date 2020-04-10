/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanListItem from "../../Extends/ModuleDuelTemp/DuelTempDanListItem";

export default class DuelTempDanListItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://rx0filvjtgxhi";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempDanListItem {
		return <DuelTempDanListItem><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempDanListItem"));
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