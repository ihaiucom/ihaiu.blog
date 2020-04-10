/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrowUpView from "../../Extends/ModuleQuest/GrowUpView";
import DailyView from "../../Extends/ModuleQuest/DailyView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import QuestWindowUI from "../../Extends/ModuleQuest/QuestWindowUI";

export default class QuestWindowUIStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_listView : fgui.GList;
	public m_growUpView : GrowUpView;
	public m_dailyView : DailyView;
	public m_head : WindowHead;

	
	public static URL:string = "ui://8o0exepanh29o";
	
	public static DependPackages:string[] = ["ModuleQuest","CommonGame","CommonBase","_ResImagePic","GamePlayerInfoUI"];

	
	public static createInstance():QuestWindowUI {
		return <QuestWindowUI><any>(fgui.UIPackage.createObject("ModuleQuest","QuestWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_listView = <fgui.GList><any>(this.getChild("listView"));
		this.m_growUpView = <GrowUpView><any>(this.getChild("growUpView"));
		this.m_dailyView = <DailyView><any>(this.getChild("dailyView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		
		
	}
}