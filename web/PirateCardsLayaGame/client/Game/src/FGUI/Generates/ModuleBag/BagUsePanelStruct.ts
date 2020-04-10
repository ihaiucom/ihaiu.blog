/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import BagNumCount from "../../Extends/ModuleBag/BagNumCount";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BagUsePanel from "../../Extends/ModuleBag/BagUsePanel";

export default class BagUsePanelStruct extends fgui.GComponent
{
	public m_bgClose : FrameView;
	public m_itemNum : BagNumCount;
	public m_closeBtn : CloseButton;
	public m_confirmBtn : CommonButton1;
	public m_cancelBtn : CommonButton1;

	
	public static URL:string = "ui://4mjxxvpqmm04y";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","CommonGame"];

	
	public static createInstance():BagUsePanel {
		return <BagUsePanel><any>(fgui.UIPackage.createObject("ModuleBag","BagUsePanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bgClose = <FrameView><any>(this.getChild("bgClose"));
		this.m_itemNum = <BagNumCount><any>(this.getChild("itemNum"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_confirmBtn = <CommonButton1><any>(this.getChild("confirmBtn"));
		this.m_cancelBtn = <CommonButton1><any>(this.getChild("cancelBtn"));
		
		
	}
}