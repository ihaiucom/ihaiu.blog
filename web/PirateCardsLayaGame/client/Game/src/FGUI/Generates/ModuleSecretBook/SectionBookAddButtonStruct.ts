/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionBookAddButton from "../../Extends/ModuleSecretBook/SectionBookAddButton";

export default class SectionBookAddButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://dmgf4euxoue8p";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SectionBookAddButton {
		return <SectionBookAddButton><any>(fgui.UIPackage.createObject("ModuleSecretBook","SectionBookAddButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}