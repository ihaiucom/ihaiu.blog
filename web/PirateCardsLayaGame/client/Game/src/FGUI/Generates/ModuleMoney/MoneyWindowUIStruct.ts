/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyView from "../../Extends/ModuleMoney/MoneyView";
import MoneyWindowUI from "../../Extends/ModuleMoney/MoneyWindowUI";

export default class MoneyWindowUIStruct extends fgui.GComponent
{
	public m_moneyView : MoneyView;

	
	public static URL:string = "ui://mwn8bfqlovfr0";
	
	public static DependPackages:string[] = ["ModuleMoney"];

	
	public static createInstance():MoneyWindowUI {
		return <MoneyWindowUI><any>(fgui.UIPackage.createObject("ModuleMoney","MoneyWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_moneyView = <MoneyView><any>(this.getChild("moneyView"));
		
		
	}
}