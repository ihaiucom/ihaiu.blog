/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagSellPanel from "../../Extends/ModuleBag/BagSellPanel";
import BagUsePanel from "../../Extends/ModuleBag/BagUsePanel";
import BagSplitPanel from "../../Extends/ModuleBag/BagSplitPanel";
import FrameView from "../../Extends/CommonBase/FrameView";
import BagNumCount from "../../Extends/ModuleBag/BagNumCount";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BagSubWindowUI from "../../Extends/ModuleBag/BagSubWindowUI";

export default class BagSubWindowUIStruct extends fgui.GComponent
{
	public m_useType : fgui.Controller;
	public m_background : fgui.GLoader;
	public m_sellPanel : BagSellPanel;
	public m_usePanel : BagUsePanel;
	public m_splitPanel : BagSplitPanel;
	public m_bgClose : FrameView;
	public m_itemNum : BagNumCount;
	public m_closeBtn : CloseButton;
	public m_confirmBtn : CommonButton1;
	public m_cancelBtn : CommonButton1;

	
	public static URL:string = "ui://4mjxxvpqmm04b";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","CommonGame"];

	
	public static createInstance():BagSubWindowUI {
		return <BagSubWindowUI><any>(fgui.UIPackage.createObject("ModuleBag","BagSubWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_useType = this.getController("useType");

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_sellPanel = <BagSellPanel><any>(this.getChild("sellPanel"));
		this.m_usePanel = <BagUsePanel><any>(this.getChild("usePanel"));
		this.m_splitPanel = <BagSplitPanel><any>(this.getChild("splitPanel"));
		this.m_bgClose = <FrameView><any>(this.getChild("bgClose"));
		this.m_itemNum = <BagNumCount><any>(this.getChild("itemNum"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_confirmBtn = <CommonButton1><any>(this.getChild("confirmBtn"));
		this.m_cancelBtn = <CommonButton1><any>(this.getChild("cancelBtn"));
		
		
	}
}