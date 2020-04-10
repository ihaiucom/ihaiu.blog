/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead from "../../Extends/CommonGame/WindowHead";
import BagItemInfoView from "../../Extends/ModuleBag/BagItemInfoView";
import BagEquipInfoView from "../../Extends/ModuleBag/BagEquipInfoView";
import LeftFragmentBtn from "../../Extends/ModuleBag/LeftFragmentBtn";
import LeftEquipBtn from "../../Extends/ModuleBag/LeftEquipBtn";
import LeftItemBtn from "../../Extends/ModuleBag/LeftItemBtn";
import BagSubWindowUI from "../../Extends/ModuleBag/BagSubWindowUI";
import BagWindowUI from "../../Extends/ModuleBag/BagWindowUI";

export default class BagWindowUIStruct extends fgui.GComponent
{
	public m_tab : fgui.Controller;
	public m_infoType : fgui.Controller;
	public m_menuTab : fgui.Controller;
	public m_list : fgui.GList;
	public m_capacityLb : fgui.GTextField;
	public m_head : WindowHead;
	public m_itemInfoView : BagItemInfoView;
	public m_equipInfoView : BagEquipInfoView;
	public m_btnPieces : LeftFragmentBtn;
	public m_btnEquip : LeftEquipBtn;
	public m_btnNormal : LeftItemBtn;
	public m_subWindow : BagSubWindowUI;

	
	public static URL:string = "ui://4mjxxvpqphnv0";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame","CommonBase"];

	
	public static createInstance():BagWindowUI {
		return <BagWindowUI><any>(fgui.UIPackage.createObject("ModuleBag","BagWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tab = this.getController("tab");
		this.m_infoType = this.getController("infoType");
		this.m_menuTab = this.getController("menuTab");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_capacityLb = <fgui.GTextField><any>(this.getChild("capacityLb"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_itemInfoView = <BagItemInfoView><any>(this.getChild("itemInfoView"));
		this.m_equipInfoView = <BagEquipInfoView><any>(this.getChild("equipInfoView"));
		this.m_btnPieces = <LeftFragmentBtn><any>(this.getChild("btnPieces"));
		this.m_btnEquip = <LeftEquipBtn><any>(this.getChild("btnEquip"));
		this.m_btnNormal = <LeftItemBtn><any>(this.getChild("btnNormal"));
		this.m_subWindow = <BagSubWindowUI><any>(this.getChild("subWindow"));
		
		
	}
}