/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyItem from "../../Extends/ModuleMoney/MoneyItem";
import MoneyView from "../../Extends/ModuleMoney/MoneyView";

export default class MoneyViewStruct extends fgui.GComponent
{
	public m_listWay : fgui.GList;
	public m_btnClose : fgui.GButton;
	public m_itemMoney : MoneyItem;

	
	public static URL:string = "ui://mwn8bfqlovfra";
	
	public static DependPackages:string[] = ["ModuleMoney"];

	
	public static createInstance():MoneyView {
		return <MoneyView><any>(fgui.UIPackage.createObject("ModuleMoney","MoneyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listWay = <fgui.GList><any>(this.getChild("listWay"));
		this.m_btnClose = <fgui.GButton><any>(this.getChild("btnClose"));
		this.m_itemMoney = <MoneyItem><any>(this.getChild("itemMoney"));
		
		
	}
}