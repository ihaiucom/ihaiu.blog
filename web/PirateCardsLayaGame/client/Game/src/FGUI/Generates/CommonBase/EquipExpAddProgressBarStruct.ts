/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipExpAddProgressBar from "../../Extends/CommonBase/EquipExpAddProgressBar";

export default class EquipExpAddProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicm7cz1x";
	
	public static DependPackages:string[] = ["CommonBase","ModuleEquip"];

	
	public static createInstance():EquipExpAddProgressBar {
		return <EquipExpAddProgressBar><any>(fgui.UIPackage.createObject("CommonBase","EquipExpAddProgressBar"));
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