/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import QuestItem from "../../Extends/ModuleQuest/QuestItem";

export default class QuestItemStruct extends fgui.GComponent
{
	public m_State : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_labQuest : fgui.GTextField;
	public m_labInfo : fgui.GTextField;
	public m_labState : fgui.GTextField;
	public m_listItem : fgui.GList;
	public m_labActive : fgui.GTextField;
	public m_btnGet : CommonButton1;

	
	public static URL:string = "ui://8o0exepanh29p";
	
	public static DependPackages:string[] = ["ModuleQuest","CommonGame","CommonBase","GamePlayerInfoUI"];

	
	public static createInstance():QuestItem {
		return <QuestItem><any>(fgui.UIPackage.createObject("ModuleQuest","QuestItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_State = this.getController("State");
		this.m_Type = this.getController("Type");

		
		this.m_labQuest = <fgui.GTextField><any>(this.getChild("labQuest"));
		this.m_labInfo = <fgui.GTextField><any>(this.getChild("labInfo"));
		this.m_labState = <fgui.GTextField><any>(this.getChild("labState"));
		this.m_listItem = <fgui.GList><any>(this.getChild("listItem"));
		this.m_labActive = <fgui.GTextField><any>(this.getChild("labActive"));
		this.m_btnGet = <CommonButton1><any>(this.getChild("btnGet"));
		
		
	}
}