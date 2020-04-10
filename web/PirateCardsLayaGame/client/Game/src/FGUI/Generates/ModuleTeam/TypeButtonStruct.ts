/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeButton from "../../Extends/ModuleTeam/TypeButton";

export default class TypeButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://2ri2ybgkmt45y";
	
	public static DependPackages:string[] = ["ModuleTeam"];

	
	public static createInstance():TypeButton {
		return <TypeButton><any>(fgui.UIPackage.createObject("ModuleTeam","TypeButton"));
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