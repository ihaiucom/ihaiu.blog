/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStar from "../../Extends/CommonGame/EquipStar";
import BagItemInfoIcon from "../../Extends/ModuleBag/BagItemInfoIcon";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import EquipHeroTypeList from "../../Extends/ModuleBag/EquipHeroTypeList";
import BagComboBox from "../../Extends/ModuleBag/BagComboBox";
import BagEquipInfoView from "../../Extends/ModuleBag/BagEquipInfoView";

export default class BagEquipInfoViewStruct extends fgui.GComponent
{
	public m_isLimit : fgui.Controller;
	public m_isMultiplyOperate : fgui.Controller;
	public m_isOnly : fgui.Controller;
	public m_isExp : fgui.Controller;
	public m_buffDescState : fgui.Controller;
	public m_itemName : fgui.GTextField;
	public m_exclusiveLb : fgui.GTextField;
	public m_buff : fgui.GTextField;
	public m_expiredTimeLb : fgui.GTextField;
	public m_des : fgui.GTextField;
	public m_proplist : fgui.GList;
	public m_star : EquipStar;
	public m_icon : BagItemInfoIcon;
	public m_singleOptBtn : CommonButton1;
	public m_getBtn : CommonButton1;
	public m_heroType : EquipHeroTypeList;
	public m_multiOptBox : BagComboBox;

	
	public static URL:string = "ui://4mjxxvpqn6c610";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame","CommonBase"];

	
	public static createInstance():BagEquipInfoView {
		return <BagEquipInfoView><any>(fgui.UIPackage.createObject("ModuleBag","BagEquipInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isLimit = this.getController("isLimit");
		this.m_isMultiplyOperate = this.getController("isMultiplyOperate");
		this.m_isOnly = this.getController("isOnly");
		this.m_isExp = this.getController("isExp");
		this.m_buffDescState = this.getController("buffDescState");

		
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_exclusiveLb = <fgui.GTextField><any>(this.getChild("exclusiveLb"));
		this.m_buff = <fgui.GTextField><any>(this.getChild("buff"));
		this.m_expiredTimeLb = <fgui.GTextField><any>(this.getChild("expiredTimeLb"));
		this.m_des = <fgui.GTextField><any>(this.getChild("des"));
		this.m_proplist = <fgui.GList><any>(this.getChild("proplist"));
		this.m_star = <EquipStar><any>(this.getChild("star"));
		this.m_icon = <BagItemInfoIcon><any>(this.getChild("icon"));
		this.m_singleOptBtn = <CommonButton1><any>(this.getChild("singleOptBtn"));
		this.m_getBtn = <CommonButton1><any>(this.getChild("getBtn"));
		this.m_heroType = <EquipHeroTypeList><any>(this.getChild("heroType"));
		this.m_multiOptBox = <BagComboBox><any>(this.getChild("multiOptBox"));
		
		
	}
}