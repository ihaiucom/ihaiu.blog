/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonCDButton from "../../Extends/ModuleTeam/CommonCDButton";

export default class CommonCDButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_State : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_labCD : fgui.GTextField;

	
	public static URL:string = "ui://2ri2ybgkqf3nq";
	
	public static DependPackages:string[] = ["ModuleTeam"];

	
	public static createInstance():CommonCDButton {
		return <CommonCDButton><any>(fgui.UIPackage.createObject("ModuleTeam","CommonCDButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_State = this.getController("State");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_labCD = <fgui.GTextField><any>(this.getChild("labCD"));
		
		
	}
}