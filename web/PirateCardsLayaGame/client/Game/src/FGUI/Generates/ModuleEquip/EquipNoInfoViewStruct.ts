/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipNoInfoView from "../../Extends/ModuleEquip/EquipNoInfoView";

export default class EquipNoInfoViewStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://1oxl19poo5e6l";
	
	public static DependPackages:string[] = ["ModuleEquip"];

	
	public static createInstance():EquipNoInfoView {
		return <EquipNoInfoView><any>(fgui.UIPackage.createObject("ModuleEquip","EquipNoInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}