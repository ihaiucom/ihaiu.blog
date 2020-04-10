/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetButton from "../../Extends/ModuleWelfare/GetButton";

export default class GetButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_State : fgui.Controller;
	public m_labState : fgui.GTextField;

	
	public static URL:string = "ui://m4vd07beovfrn";
	
	public static DependPackages:string[] = ["ModuleWelfare"];

	
	public static createInstance():GetButton {
		return <GetButton><any>(fgui.UIPackage.createObject("ModuleWelfare","GetButton"));
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

		
		this.m_labState = <fgui.GTextField><any>(this.getChild("labState"));
		
		
	}
}