/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempButton from "../../Extends/ModuleDuelTemp/DuelTempButton";

export default class DuelTempButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_View : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://rx0filvjtgxh6";
	
	public static DependPackages:string[] = ["ModuleDuelTemp"];

	
	public static createInstance():DuelTempButton {
		return <DuelTempButton><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_View = this.getController("View");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}