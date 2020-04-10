/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipHeroTypeIcon from "../../Extends/ModuleBag/EquipHeroTypeIcon";

export default class EquipHeroTypeIconStruct extends fgui.GComponent
{
	public m_typeIcon : fgui.GLoader;

	
	public static URL:string = "ui://4mjxxvpqpb7v1l";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():EquipHeroTypeIcon {
		return <EquipHeroTypeIcon><any>(fgui.UIPackage.createObject("ModuleBag","EquipHeroTypeIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_typeIcon = <fgui.GLoader><any>(this.getChild("typeIcon"));
		
		
	}
}