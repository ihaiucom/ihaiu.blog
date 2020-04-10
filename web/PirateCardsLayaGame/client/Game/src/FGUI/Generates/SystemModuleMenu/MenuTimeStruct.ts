/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";

export default class MenuTimeStruct extends fgui.GLabel
{
	public m_time : fgui.GTextField;

	
	public static URL:string = "ui://4rsi5gesszhvl";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():MenuTime {
		return <MenuTime><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuTime"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_time = <fgui.GTextField><any>(this.getChild("time"));
		
		
	}
}