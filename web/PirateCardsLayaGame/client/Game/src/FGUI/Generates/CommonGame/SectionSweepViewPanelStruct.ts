/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import SectionSweepViewPanel from "../../Extends/CommonGame/SectionSweepViewPanel";

export default class SectionSweepViewPanelStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_list : fgui.GList;
	public m_closeBtn : CloseButton;
	public m_sweep10 : CommonButton1;
	public m_sweep : CommonButton1;

	
	public static URL:string = "ui://4snov4n9si8zz2y";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase","_ResImageUIV1"];

	
	public static createInstance():SectionSweepViewPanel {
		return <SectionSweepViewPanel><any>(fgui.UIPackage.createObject("CommonGame","SectionSweepViewPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_sweep10 = <CommonButton1><any>(this.getChild("sweep10"));
		this.m_sweep = <CommonButton1><any>(this.getChild("sweep"));
		
		
	}
}