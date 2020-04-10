/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagTab from "../../Extends/ModuleBag/BagTab";

export default class BagTabStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4mjxxvpqphnv1";
	
	public static DependPackages:string[] = ["ModuleBag","_ResImageUIV1"];

	
	public static createInstance():BagTab {
		return <BagTab><any>(fgui.UIPackage.createObject("ModuleBag","BagTab"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}