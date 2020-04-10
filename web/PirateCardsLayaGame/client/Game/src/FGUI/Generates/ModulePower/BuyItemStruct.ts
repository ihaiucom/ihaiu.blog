/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import ItemCommon from "../../Extends/CommonGame/ItemCommon";
import BuyItem from "../../Extends/ModulePower/BuyItem";

export default class BuyItemStruct extends fgui.GComponent
{
	public m_Enough : fgui.Controller;
	public m_labNum : fgui.GTextField;
	public m_btnBuy : CommonButton1;
	public m_item : ItemCommon;

	
	public static URL:string = "ui://kkzurfexltulm";
	
	public static DependPackages:string[] = ["ModulePower","CommonBase","CommonGame"];

	
	public static createInstance():BuyItem {
		return <BuyItem><any>(fgui.UIPackage.createObject("ModulePower","BuyItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Enough = this.getController("Enough");

		
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		this.m_btnBuy = <CommonButton1><any>(this.getChild("btnBuy"));
		this.m_item = <ItemCommon><any>(this.getChild("item"));
		
		
	}
}