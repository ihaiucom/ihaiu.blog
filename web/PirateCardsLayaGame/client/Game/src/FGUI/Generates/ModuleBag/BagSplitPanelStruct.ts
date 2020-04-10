/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton from "../../Extends/CommonBase/CommonButton";
import BagSplitPanel from "../../Extends/ModuleBag/BagSplitPanel";

export default class BagSplitPanelStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_closeBtn : CloseButton;
	public m_confirmBtn : CommonButton;
	public m_cancelBtn : CommonButton;

	
	public static URL:string = "ui://4mjxxvpqmm04z";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","_ResImageUIV1"];

	
	public static createInstance():BagSplitPanel {
		return <BagSplitPanel><any>(fgui.UIPackage.createObject("ModuleBag","BagSplitPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_confirmBtn = <CommonButton><any>(this.getChild("confirmBtn"));
		this.m_cancelBtn = <CommonButton><any>(this.getChild("cancelBtn"));
		
		
	}
}