/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanIconItem from "../../Extends/ModuleDuelTemp/DuelTempDanIconItem";

export default class DuelTempDanIconItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://rx0filvjtgxhh";
	
	public static DependPackages:string[] = ["ModuleDuelTemp"];

	
	public static createInstance():DuelTempDanIconItem {
		return <DuelTempDanIconItem><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempDanIconItem"));
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
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}