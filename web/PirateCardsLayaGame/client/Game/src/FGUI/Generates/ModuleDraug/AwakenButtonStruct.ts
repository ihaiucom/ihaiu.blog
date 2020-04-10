/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenButton from "../../Extends/ModuleDraug/AwakenButton";

export default class AwakenButtonStruct extends fgui.GButton
{
	public m_State : fgui.Controller;
	public m_index : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://hc5dpgynqq5r9";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():AwakenButton {
		return <AwakenButton><any>(fgui.UIPackage.createObject("ModuleDraug","AwakenButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_State = this.getController("State");
		this.m_index = this.getController("index");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}