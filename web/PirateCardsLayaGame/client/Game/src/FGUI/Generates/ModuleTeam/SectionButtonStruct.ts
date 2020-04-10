/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionButton from "../../Extends/ModuleTeam/SectionButton";

export default class SectionButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://2ri2ybgkmt45w";
	
	public static DependPackages:string[] = ["ModuleTeam"];

	
	public static createInstance():SectionButton {
		return <SectionButton><any>(fgui.UIPackage.createObject("ModuleTeam","SectionButton"));
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