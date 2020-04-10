/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import HeroSkillIconButton from "../../Extends/ModuleHero/HeroSkillIconButton";
import HeroSkillTipsDialog from "../../Extends/ModuleHero/HeroSkillTipsDialog";

export default class HeroSkillTipsDialogStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_labelName : fgui.GTextField;
	public m_labelLevel : fgui.GTextField;
	public m_labelType : fgui.GTextField;
	public m_labelDesc : fgui.GTextField;
	public m_labelNextDesc : fgui.GTextField;
	public m_labelText : fgui.GTextField;
	public m_frame : FrameView;
	public m_icon : HeroSkillIconButton;

	
	public static URL:string = "ui://lxpvy4fwj90me9g";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase","ModuleEquip"];

	
	public static createInstance():HeroSkillTipsDialog {
		return <HeroSkillTipsDialog><any>(fgui.UIPackage.createObject("ModuleHero","HeroSkillTipsDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_labelName = <fgui.GTextField><any>(this.getChild("labelName"));
		this.m_labelLevel = <fgui.GTextField><any>(this.getChild("labelLevel"));
		this.m_labelType = <fgui.GTextField><any>(this.getChild("labelType"));
		this.m_labelDesc = <fgui.GTextField><any>(this.getChild("labelDesc"));
		this.m_labelNextDesc = <fgui.GTextField><any>(this.getChild("labelNextDesc"));
		this.m_labelText = <fgui.GTextField><any>(this.getChild("labelText"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_icon = <HeroSkillIconButton><any>(this.getChild("icon"));
		
		
	}
}