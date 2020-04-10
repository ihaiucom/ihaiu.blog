/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipHeroTypeList from "../../Extends/ModuleBag/EquipHeroTypeList";

export default class EquipHeroTypeListStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://4mjxxvpqv18i1g";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():EquipHeroTypeList {
		return <EquipHeroTypeList><any>(fgui.UIPackage.createObject("ModuleBag","EquipHeroTypeList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}