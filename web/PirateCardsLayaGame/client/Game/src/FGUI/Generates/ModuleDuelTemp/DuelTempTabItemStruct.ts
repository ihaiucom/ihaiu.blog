/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempTabItem from "../../Extends/ModuleDuelTemp/DuelTempTabItem";

export default class DuelTempTabItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://rx0filvjtgxhf";
	
	public static DependPackages:string[] = ["ModuleDuelTemp"];

	
	public static createInstance():DuelTempTabItem {
		return <DuelTempTabItem><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempTabItem"));
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