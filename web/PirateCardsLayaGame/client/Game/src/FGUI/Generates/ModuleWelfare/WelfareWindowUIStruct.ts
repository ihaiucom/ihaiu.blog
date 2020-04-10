/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WelfarePowerView from "../../Extends/ModuleWelfare/WelfarePowerView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import WelfareWindowUI from "../../Extends/ModuleWelfare/WelfareWindowUI";

export default class WelfareWindowUIStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_listView : fgui.GList;
	public m_powerView : WelfarePowerView;
	public m_head : WindowHead;

	
	public static URL:string = "ui://m4vd07beovfrk";
	
	public static DependPackages:string[] = ["ModuleWelfare","CommonGame","CommonBase","_ResImageUIV1"];

	
	public static createInstance():WelfareWindowUI {
		return <WelfareWindowUI><any>(fgui.UIPackage.createObject("ModuleWelfare","WelfareWindowUI"));
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
		this.m_powerView = <WelfarePowerView><any>(this.getChild("powerView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		
		
	}
}