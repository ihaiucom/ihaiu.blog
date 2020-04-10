/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipExpProgressBar from "../../Extends/CommonBase/EquipExpProgressBar";

export default class EquipExpProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicm7cz1w";
	
	public static DependPackages:string[] = ["CommonBase","ModuleEquip"];

	
	public static createInstance():EquipExpProgressBar {
		return <EquipExpProgressBar><any>(fgui.UIPackage.createObject("CommonBase","EquipExpProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}