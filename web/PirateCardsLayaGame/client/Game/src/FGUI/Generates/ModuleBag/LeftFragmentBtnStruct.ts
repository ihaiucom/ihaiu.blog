/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LeftFragmentBtn from "../../Extends/ModuleBag/LeftFragmentBtn";

export default class LeftFragmentBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://4mjxxvpqv18i1e";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():LeftFragmentBtn {
		return <LeftFragmentBtn><any>(fgui.UIPackage.createObject("ModuleBag","LeftFragmentBtn"));
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