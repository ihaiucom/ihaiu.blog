/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LeftEquipBtn from "../../Extends/ModuleBag/LeftEquipBtn";

export default class LeftEquipBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://4mjxxvpqv18i1d";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():LeftEquipBtn {
		return <LeftEquipBtn><any>(fgui.UIPackage.createObject("ModuleBag","LeftEquipBtn"));
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