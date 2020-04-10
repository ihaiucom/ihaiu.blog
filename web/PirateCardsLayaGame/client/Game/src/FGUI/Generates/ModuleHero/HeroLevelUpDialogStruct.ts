/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import HeroLevelUpDialog from "../../Extends/ModuleHero/HeroLevelUpDialog";

export default class HeroLevelUpDialogStruct extends fgui.GComponent
{
	public m_itemEXP : fgui.GTextField;
	public m_list : fgui.GList;
	public m_itemName : fgui.GTextField;
	public m_frame : FrameView;
	public m_btnLevel : CommonButton1;

	
	public static URL:string = "ui://lxpvy4fwrqcu21";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase"];

	
	public static createInstance():HeroLevelUpDialog {
		return <HeroLevelUpDialog><any>(fgui.UIPackage.createObject("ModuleHero","HeroLevelUpDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_itemEXP = <fgui.GTextField><any>(this.getChild("itemEXP"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_btnLevel = <CommonButton1><any>(this.getChild("btnLevel"));
		
		
	}
}