/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import DialogHeadBig from "../../Extends/CommonGame/DialogHeadBig";
import CommonButton from "../../Extends/CommonBase/CommonButton";
import CommonSkillDialog from "../../Extends/ModuleBattlePlan/CommonSkillDialog";

export default class CommonSkillDialogStruct extends fgui.GComponent
{
	public m_listCommonSkill : fgui.GList;
	public m_SkillName : fgui.GTextField;
	public m_listEffects : fgui.GList;
	public m_listCodition : fgui.GList;
	public m_frame : FrameView;
	public m_head : DialogHeadBig;
	public m_choose : CommonButton;

	
	public static URL:string = "ui://lrfjmmwxnbl51l";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonBase","CommonGame","_ResImageUIV1"];

	
	public static createInstance():CommonSkillDialog {
		return <CommonSkillDialog><any>(fgui.UIPackage.createObject("ModuleBattlePlan","CommonSkillDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listCommonSkill = <fgui.GList><any>(this.getChild("listCommonSkill"));
		this.m_SkillName = <fgui.GTextField><any>(this.getChild("SkillName"));
		this.m_listEffects = <fgui.GList><any>(this.getChild("listEffects"));
		this.m_listCodition = <fgui.GList><any>(this.getChild("listCodition"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_head = <DialogHeadBig><any>(this.getChild("head"));
		this.m_choose = <CommonButton><any>(this.getChild("choose"));
		
		
	}
}