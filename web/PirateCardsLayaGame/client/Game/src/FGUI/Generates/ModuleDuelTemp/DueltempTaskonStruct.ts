/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempTaskon from "../../Extends/ModuleDuelTemp/DueltempTaskon";

export default class DueltempTaskonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://rx0filvjhven20";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonBase"];

	
	public static createInstance():DueltempTaskon {
		return <DueltempTaskon><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DueltempTaskon"));
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