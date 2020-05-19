/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Level from "../../Extends/GameHome/Level";

export default class LevelStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrn2s1cn";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():Level {
		return <Level><any>(fgui.UIPackage.createObject("GameHome","Level"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}