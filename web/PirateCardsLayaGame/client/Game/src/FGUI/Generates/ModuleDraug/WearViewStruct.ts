/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeComboBox from "../../Extends/ModuleDraug/TypeComboBox";
import DraugItem from "../../Extends/ModuleDraug/DraugItem";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import DraugHeroItem from "../../Extends/ModuleDraug/DraugHeroItem";
import WearView from "../../Extends/ModuleDraug/WearView";

export default class WearViewStruct extends fgui.GComponent
{
	public m_Filter : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_Info : fgui.Controller;
	public m_listDrug : fgui.GList;
	public m_listDrugType : fgui.GList;
	public m_listPart : fgui.GList;
	public m_listQuality : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_listProp : fgui.GList;
	public m_property : fgui.GGroup;
	public m_labInfo : fgui.GTextField;
	public m_labNowLv : fgui.GTextField;
	public m_labNewLv : fgui.GTextField;
	public m_swallow : fgui.GGroup;
	public m_btnReturn : fgui.GButton;
	public m_btnType : fgui.GButton;
	public m_btnPart : fgui.GButton;
	public m_boxFilter : TypeComboBox;
	public m_boxProp : TypeComboBox;
	public m_selectDraug : DraugItem;
	public m_btnSelect : fgui.GButton;
	public m_progressExp : fgui.GProgressBar;
	public m_btnSwallow : CommonButton1;
	public m_btnClose : CommonButton1;
	public m_heroItem : DraugHeroItem;

	
	public static URL:string = "ui://hc5dpgynqq5r2";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase","CommonGame"];

	
	public static createInstance():WearView {
		return <WearView><any>(fgui.UIPackage.createObject("ModuleDraug","WearView"));
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
		this.m_Info = this.getController("Info");

		
		this.m_listDrug = <fgui.GList><any>(this.getChild("listDrug"));
		this.m_listDrugType = <fgui.GList><any>(this.getChild("listDrugType"));
		this.m_listPart = <fgui.GList><any>(this.getChild("listPart"));
		this.m_listQuality = <fgui.GList><any>(this.getChild("listQuality"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_listProp = <fgui.GList><any>(this.getChild("listProp"));
		this.m_property = <fgui.GGroup><any>(this.getChild("property"));
		this.m_labInfo = <fgui.GTextField><any>(this.getChild("labInfo"));
		this.m_labNowLv = <fgui.GTextField><any>(this.getChild("labNowLv"));
		this.m_labNewLv = <fgui.GTextField><any>(this.getChild("labNewLv"));
		this.m_swallow = <fgui.GGroup><any>(this.getChild("swallow"));
		this.m_btnReturn = <fgui.GButton><any>(this.getChild("btnReturn"));
		this.m_btnType = <fgui.GButton><any>(this.getChild("btnType"));
		this.m_btnPart = <fgui.GButton><any>(this.getChild("btnPart"));
		this.m_boxFilter = <TypeComboBox><any>(this.getChild("boxFilter"));
		this.m_boxProp = <TypeComboBox><any>(this.getChild("boxProp"));
		this.m_selectDraug = <DraugItem><any>(this.getChild("selectDraug"));
		this.m_btnSelect = <fgui.GButton><any>(this.getChild("btnSelect"));
		this.m_progressExp = <fgui.GProgressBar><any>(this.getChild("progressExp"));
		this.m_btnSwallow = <CommonButton1><any>(this.getChild("btnSwallow"));
		this.m_btnClose = <CommonButton1><any>(this.getChild("btnClose"));
		this.m_heroItem = <DraugHeroItem><any>(this.getChild("heroItem"));
		
		
	}
}