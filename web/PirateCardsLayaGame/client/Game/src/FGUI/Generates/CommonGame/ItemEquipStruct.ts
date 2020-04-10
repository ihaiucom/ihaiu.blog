/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemEquip from "../../Extends/CommonGame/ItemEquip";

export default class ItemEquipStruct extends fgui.GComponent
{
	public m_frameIcon : fgui.GLoader;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9skmaj";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():ItemEquip {
		return <ItemEquip><any>(fgui.UIPackage.createObject("CommonGame","ItemEquip"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_frameIcon = <fgui.GLoader><any>(this.getChild("frameIcon"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}