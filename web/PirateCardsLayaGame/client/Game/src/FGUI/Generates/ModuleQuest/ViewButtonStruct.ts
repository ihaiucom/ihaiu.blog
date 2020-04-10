/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ViewButton from "../../Extends/ModuleQuest/ViewButton";

export default class ViewButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://8o0exepanh29m";
	
	public static DependPackages:string[] = ["ModuleQuest","CommonGame"];

	
	public static createInstance():ViewButton {
		return <ViewButton><any>(fgui.UIPackage.createObject("ModuleQuest","ViewButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}