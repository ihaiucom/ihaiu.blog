/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LeftItemBtn from "../../Extends/ModuleBag/LeftItemBtn";

export default class LeftItemBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://4mjxxvpqv18i1c";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():LeftItemBtn {
		return <LeftItemBtn><any>(fgui.UIPackage.createObject("ModuleBag","LeftItemBtn"));
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