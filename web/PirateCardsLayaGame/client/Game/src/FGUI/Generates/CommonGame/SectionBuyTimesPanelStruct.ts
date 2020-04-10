/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import SectionBuyTimesPanel from "../../Extends/CommonGame/SectionBuyTimesPanel";

export default class SectionBuyTimesPanelStruct extends fgui.GComponent
{
	public m_totalTimes : fgui.GTextField;
	public m_buyCount : fgui.GTextField;
	public m_closeBtn : CloseButton;
	public m_cost : BaseRewardItem;
	public m_buyBtn : CommonButton1;

	
	public static URL:string = "ui://4snov4n9si8zz32";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():SectionBuyTimesPanel {
		return <SectionBuyTimesPanel><any>(fgui.UIPackage.createObject("CommonGame","SectionBuyTimesPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_totalTimes = <fgui.GTextField><any>(this.getChild("totalTimes"));
		this.m_buyCount = <fgui.GTextField><any>(this.getChild("buyCount"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_cost = <BaseRewardItem><any>(this.getChild("cost"));
		this.m_buyBtn = <CommonButton1><any>(this.getChild("buyBtn"));
		
		
	}
}