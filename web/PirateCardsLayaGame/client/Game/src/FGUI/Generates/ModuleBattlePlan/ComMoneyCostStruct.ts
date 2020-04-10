/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ComMoneyCost from "../../Extends/ModuleBattlePlan/ComMoneyCost";

export default class ComMoneyCostStruct extends fgui.GComponent
{
	public m_State : fgui.Controller;
	public m_textCost : fgui.GTextField;

	
	public static URL:string = "ui://lrfjmmwxj35s1h";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():ComMoneyCost {
		return <ComMoneyCost><any>(fgui.UIPackage.createObject("ModuleBattlePlan","ComMoneyCost"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_State = this.getController("State");

		
		this.m_textCost = <fgui.GTextField><any>(this.getChild("textCost"));
		
		
	}
}