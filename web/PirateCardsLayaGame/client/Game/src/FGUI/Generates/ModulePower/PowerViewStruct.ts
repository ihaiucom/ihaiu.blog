/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import BuyItem from "../../Extends/ModulePower/BuyItem";
import PowerView from "../../Extends/ModulePower/PowerView";

export default class PowerViewStruct extends fgui.GComponent
{
	public m_listUse : fgui.GList;
	public m_labNum : fgui.GTextField;
	public m_btnClose : CloseButton;
	public m_buy : BuyItem;

	
	public static URL:string = "ui://kkzurfexltul1";
	
	public static DependPackages:string[] = ["ModulePower","CommonBase","CommonGame"];

	
	public static createInstance():PowerView {
		return <PowerView><any>(fgui.UIPackage.createObject("ModulePower","PowerView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listUse = <fgui.GList><any>(this.getChild("listUse"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_buy = <BuyItem><any>(this.getChild("buy"));
		
		
	}
}