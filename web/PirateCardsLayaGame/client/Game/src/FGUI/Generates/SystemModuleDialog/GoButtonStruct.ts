/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GoButton from "../../Extends/SystemModuleDialog/GoButton";

export default class GoButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://q5yddivts0xqk";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():GoButton {
		return <GoButton><any>(fgui.UIPackage.createObject("SystemModuleDialog","GoButton"));
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