/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRButton from "../../Extends/SystemModuleMenu/MenuRButton";
import MenuBarRightBottom from "../../Extends/SystemModuleMenu/MenuBarRightBottom";

export default class MenuBarRightBottomStruct extends fgui.GComponent
{
	public m_setting : MenuRButton;

	
	public static URL:string = "ui://4rsi5gesszhvo";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():MenuBarRightBottom {
		return <MenuBarRightBottom><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuBarRightBottom"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_setting = <MenuRButton><any>(this.getChild("setting"));
		
		
	}
}