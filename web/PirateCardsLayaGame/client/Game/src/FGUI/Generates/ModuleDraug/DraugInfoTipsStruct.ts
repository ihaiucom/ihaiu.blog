/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugItem from "../../Extends/ModuleDraug/DraugItem";
import PropItem from "../../Extends/ModuleDraug/PropItem";
import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import DraugInfoTips from "../../Extends/ModuleDraug/DraugInfoTips";

export default class DraugInfoTipsStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_MaxLv : fgui.Controller;
	public m_Pos : fgui.Controller;
	public m_labName : fgui.GTextField;
	public m_labOwner : fgui.GTextField;
	public m_labExp : fgui.GTextField;
	public m_labLv : fgui.GTextField;
	public m_listProp : fgui.GList;
	public m_listSuit : fgui.GList;
	public m_selectDraug : DraugItem;
	public m_mainProp : PropItem;
	public m_btnLock : fgui.GButton;
	public m_progressExp : fgui.GProgressBar;
	public m_btnAwaken : CommonButton2;
	public m_btnSwallow : CommonButton2;
	public m_btnUnWear : CommonButton2;
	public m_btnDecompose : CommonButton2;
	public m_btnWear : CommonButton2;
	public m_btnChange : CommonButton2;

	
	public static URL:string = "ui://hc5dpgynqq5rc";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase","CommonGame"];

	
	public static createInstance():DraugInfoTips {
		return <DraugInfoTips><any>(fgui.UIPackage.createObject("ModuleDraug","DraugInfoTips"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");
		this.m_MaxLv = this.getController("MaxLv");
		this.m_Pos = this.getController("Pos");

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labOwner = <fgui.GTextField><any>(this.getChild("labOwner"));
		this.m_labExp = <fgui.GTextField><any>(this.getChild("labExp"));
		this.m_labLv = <fgui.GTextField><any>(this.getChild("labLv"));
		this.m_listProp = <fgui.GList><any>(this.getChild("listProp"));
		this.m_listSuit = <fgui.GList><any>(this.getChild("listSuit"));
		this.m_selectDraug = <DraugItem><any>(this.getChild("selectDraug"));
		this.m_mainProp = <PropItem><any>(this.getChild("mainProp"));
		this.m_btnLock = <fgui.GButton><any>(this.getChild("btnLock"));
		this.m_progressExp = <fgui.GProgressBar><any>(this.getChild("progressExp"));
		this.m_btnAwaken = <CommonButton2><any>(this.getChild("btnAwaken"));
		this.m_btnSwallow = <CommonButton2><any>(this.getChild("btnSwallow"));
		this.m_btnUnWear = <CommonButton2><any>(this.getChild("btnUnWear"));
		this.m_btnDecompose = <CommonButton2><any>(this.getChild("btnDecompose"));
		this.m_btnWear = <CommonButton2><any>(this.getChild("btnWear"));
		this.m_btnChange = <CommonButton2><any>(this.getChild("btnChange"));
		
		
	}
}