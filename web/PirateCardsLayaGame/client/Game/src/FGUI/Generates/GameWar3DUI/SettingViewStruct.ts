/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import SettingView from "../../Extends/GameWar3DUI/SettingView";

export default class SettingViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_btnReset : fgui.GButton;
	public m_btnError : fgui.GButton;
	public m_btnContinu : CommonButton1;
	public m_btnExite : CommonButton1;

	
	public static URL:string = "ui://yhpe9txzva9v7f";
	
	public static DependPackages:string[] = ["GameWar3DUI","CommonBase","CommonGame"];

	
	public static createInstance():SettingView {
		return <SettingView><any>(fgui.UIPackage.createObject("GameWar3DUI","SettingView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_btnReset = <fgui.GButton><any>(this.getChild("btnReset"));
		this.m_btnError = <fgui.GButton><any>(this.getChild("btnError"));
		this.m_btnContinu = <CommonButton1><any>(this.getChild("btnContinu"));
		this.m_btnExite = <CommonButton1><any>(this.getChild("btnExite"));
		
		
	}
}