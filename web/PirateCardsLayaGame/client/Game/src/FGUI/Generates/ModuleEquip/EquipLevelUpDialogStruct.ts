/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import EquipLevelUpDialog from "../../Extends/ModuleEquip/EquipLevelUpDialog";

export default class EquipLevelUpDialogStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_desc : fgui.GTextField;
	public m_levellist : fgui.GList;
	public m_starList : fgui.GList;
	public m_frame : FrameView;
	public m_btnClose : CloseButton;
	public m_btnOk : CommonButton1;
	public m_btnCancel : CommonButton1;

	
	public static URL:string = "ui://1oxl19powhupm";
	
	public static DependPackages:string[] = ["ModuleEquip","CommonBase"];

	
	public static createInstance():EquipLevelUpDialog {
		return <EquipLevelUpDialog><any>(fgui.UIPackage.createObject("ModuleEquip","EquipLevelUpDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_desc = <fgui.GTextField><any>(this.getChild("desc"));
		this.m_levellist = <fgui.GList><any>(this.getChild("levellist"));
		this.m_starList = <fgui.GList><any>(this.getChild("starList"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_btnOk = <CommonButton1><any>(this.getChild("btnOk"));
		this.m_btnCancel = <CommonButton1><any>(this.getChild("btnCancel"));
		
		
	}
}