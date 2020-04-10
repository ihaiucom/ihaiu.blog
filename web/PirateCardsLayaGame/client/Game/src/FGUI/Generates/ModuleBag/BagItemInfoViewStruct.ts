/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemInfoIcon from "../../Extends/ModuleBag/BagItemInfoIcon";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BagComboBox from "../../Extends/ModuleBag/BagComboBox";
import BagItemInfoView from "../../Extends/ModuleBag/BagItemInfoView";

export default class BagItemInfoViewStruct extends fgui.GComponent
{
	public m_isExpired : fgui.Controller;
	public m_isLimit : fgui.Controller;
	public m_isMultiplyOperate : fgui.Controller;
	public m_itemName : fgui.GTextField;
	public m_num : fgui.GTextField;
	public m_des : fgui.GTextField;
	public m_expiredTimeLb : fgui.GTextField;
	public m_icon : BagItemInfoIcon;
	public m_getBtn : CommonButton1;
	public m_multiOptBox : BagComboBox;
	public m_singleOptBtn : CommonButton1;

	
	public static URL:string = "ui://4mjxxvpqphnv3";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","CommonGame"];

	
	public static createInstance():BagItemInfoView {
		return <BagItemInfoView><any>(fgui.UIPackage.createObject("ModuleBag","BagItemInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isExpired = this.getController("isExpired");
		this.m_isLimit = this.getController("isLimit");
		this.m_isMultiplyOperate = this.getController("isMultiplyOperate");

		
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		this.m_des = <fgui.GTextField><any>(this.getChild("des"));
		this.m_expiredTimeLb = <fgui.GTextField><any>(this.getChild("expiredTimeLb"));
		this.m_icon = <BagItemInfoIcon><any>(this.getChild("icon"));
		this.m_getBtn = <CommonButton1><any>(this.getChild("getBtn"));
		this.m_multiOptBox = <BagComboBox><any>(this.getChild("multiOptBox"));
		this.m_singleOptBtn = <CommonButton1><any>(this.getChild("singleOptBtn"));
		
		
	}
}