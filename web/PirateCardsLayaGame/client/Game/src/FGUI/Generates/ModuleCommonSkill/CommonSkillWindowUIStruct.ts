/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogHeadBig from "../../Extends/CommonGame/DialogHeadBig";
import CommonButton from "../../Extends/CommonBase/CommonButton";
import CommonSkillWindowUI from "../../Extends/ModuleCommonSkill/CommonSkillWindowUI";

export default class CommonSkillWindowUIStruct extends fgui.GComponent
{
	public m_listCommonSkill : fgui.GList;
	public m_SkillName : fgui.GTextField;
	public m_listEffects : fgui.GList;
	public m_listCodition : fgui.GList;
	public m_head : DialogHeadBig;
	public m_choose : CommonButton;

	
	public static URL:string = "ui://0468a9p6yyh30";
	
	public static DependPackages:string[] = ["ModuleCommonSkill","CommonGame","CommonBase","_ResImageUIV1"];

	
	public static createInstance():CommonSkillWindowUI {
		return <CommonSkillWindowUI><any>(fgui.UIPackage.createObject("ModuleCommonSkill","CommonSkillWindowUI"));
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
		this.m_head = <DialogHeadBig><any>(this.getChild("head"));
		this.m_choose = <CommonButton><any>(this.getChild("choose"));
		
		
	}
}