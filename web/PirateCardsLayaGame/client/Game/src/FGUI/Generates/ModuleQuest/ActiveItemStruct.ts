/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActiveItem from "../../Extends/ModuleQuest/ActiveItem";

export default class ActiveItemStruct extends fgui.GComponent
{
	public m_State : fgui.Controller;
	public m_labActive : fgui.GTextField;
	public m_btnGet : fgui.GButton;

	
	public static URL:string = "ui://8o0exepaqqu7s";
	
	public static DependPackages:string[] = ["ModuleQuest"];

	
	public static createInstance():ActiveItem {
		return <ActiveItem><any>(fgui.UIPackage.createObject("ModuleQuest","ActiveItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_State = this.getController("State");

		
		this.m_labActive = <fgui.GTextField><any>(this.getChild("labActive"));
		this.m_btnGet = <fgui.GButton><any>(this.getChild("btnGet"));
		
		
	}
}