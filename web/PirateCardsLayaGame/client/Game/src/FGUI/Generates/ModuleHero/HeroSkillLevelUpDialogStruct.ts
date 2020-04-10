/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import HeroSkillIconButton from "../../Extends/ModuleHero/HeroSkillIconButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import HeroSkillLevelUpDialog from "../../Extends/ModuleHero/HeroSkillLevelUpDialog";

export default class HeroSkillLevelUpDialogStruct extends fgui.GComponent
{
	public m_color : fgui.Controller;
	public m_labelNextDesc : fgui.GTextField;
	public m_list : fgui.GList;
	public m_labelCost : fgui.GTextField;
	public m_labelLv : fgui.GTextField;
	public m_labelNextLv : fgui.GTextField;
	public m_moneyIcon : fgui.GLoader;
	public m_frame : FrameView;
	public m_btnClose : CloseButton;
	public m_icon : HeroSkillIconButton;
	public m_btnLevel : CommonButton1;

	
	public static URL:string = "ui://lxpvy4fwj90me9l";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase","ModuleEquip"];

	
	public static createInstance():HeroSkillLevelUpDialog {
		return <HeroSkillLevelUpDialog><any>(fgui.UIPackage.createObject("ModuleHero","HeroSkillLevelUpDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_labelNextDesc = <fgui.GTextField><any>(this.getChild("labelNextDesc"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_labelCost = <fgui.GTextField><any>(this.getChild("labelCost"));
		this.m_labelLv = <fgui.GTextField><any>(this.getChild("labelLv"));
		this.m_labelNextLv = <fgui.GTextField><any>(this.getChild("labelNextLv"));
		this.m_moneyIcon = <fgui.GLoader><any>(this.getChild("moneyIcon"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_icon = <HeroSkillIconButton><any>(this.getChild("icon"));
		this.m_btnLevel = <CommonButton1><any>(this.getChild("btnLevel"));
		
		
	}
}