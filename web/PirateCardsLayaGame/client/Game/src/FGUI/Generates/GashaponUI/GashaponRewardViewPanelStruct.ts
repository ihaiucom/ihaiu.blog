/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import GashaponRewardViewPanel from "../../Extends/GashaponUI/GashaponRewardViewPanel";

export default class GashaponRewardViewPanelStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_confirmBtn : CommonButton1;
	public m_oneBtn : CommonButton1;
	public m_tenBtn : CommonButton1;
	public m_backBtn : CloseButton;

	
	public static URL:string = "ui://660ksptmhwig9";
	
	public static DependPackages:string[] = ["GashaponUI","CommonBase"];

	
	public static createInstance():GashaponRewardViewPanel {
		return <GashaponRewardViewPanel><any>(fgui.UIPackage.createObject("GashaponUI","GashaponRewardViewPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_confirmBtn = <CommonButton1><any>(this.getChild("confirmBtn"));
		this.m_oneBtn = <CommonButton1><any>(this.getChild("oneBtn"));
		this.m_tenBtn = <CommonButton1><any>(this.getChild("tenBtn"));
		this.m_backBtn = <CloseButton><any>(this.getChild("backBtn"));
		
		
	}
}