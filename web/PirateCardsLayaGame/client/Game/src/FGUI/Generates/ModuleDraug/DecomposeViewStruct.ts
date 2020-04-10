/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeComboBox from "../../Extends/ModuleDraug/TypeComboBox";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import DecomposeView from "../../Extends/ModuleDraug/DecomposeView";

export default class DecomposeViewStruct extends fgui.GComponent
{
	public m_Filter : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_listDrug : fgui.GList;
	public m_listDrugType : fgui.GList;
	public m_listPart : fgui.GList;
	public m_listQuality : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_labMoney : fgui.GTextField;
	public m_boxFilter : TypeComboBox;
	public m_btnReturn : fgui.GButton;
	public m_btnSelect : fgui.GButton;
	public m_progressNum : fgui.GProgressBar;
	public m_btnDecompose : CommonButton1;

	
	public static URL:string = "ui://hc5dpgynyt2l10";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase"];

	
	public static createInstance():DecomposeView {
		return <DecomposeView><any>(fgui.UIPackage.createObject("ModuleDraug","DecomposeView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Filter = this.getController("Filter");
		this.m_Type = this.getController("Type");

		
		this.m_listDrug = <fgui.GList><any>(this.getChild("listDrug"));
		this.m_listDrugType = <fgui.GList><any>(this.getChild("listDrugType"));
		this.m_listPart = <fgui.GList><any>(this.getChild("listPart"));
		this.m_listQuality = <fgui.GList><any>(this.getChild("listQuality"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labMoney = <fgui.GTextField><any>(this.getChild("labMoney"));
		this.m_boxFilter = <TypeComboBox><any>(this.getChild("boxFilter"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		this.m_btnSelect = <fgui.GButton><any>(this.getChild("btnSelect"));
		this.m_progressNum = <fgui.GProgressBar><any>(this.getChild("progressNum"));
		this.m_btnDecompose = <CommonButton1><any>(this.getChild("btnDecompose"));
		
		
	}
}