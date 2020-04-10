/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton5 from "../../Extends/CommonBase/CommonButton5";
import ReviveView from "../../Extends/GameWar3DUI/ReviveView";

export default class ReviveViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_restNum : fgui.GTextField;
	public m_costNum : fgui.GTextField;
	public m_reviveNum : fgui.GTextField;
	public m_reviveBtn : CommonButton5;

	
	public static URL:string = "ui://yhpe9txzr3a3fu";
	
	public static DependPackages:string[] = ["GameWar3DUI","CommonBase"];

	
	public static createInstance():ReviveView {
		return <ReviveView><any>(fgui.UIPackage.createObject("GameWar3DUI","ReviveView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_restNum = <fgui.GTextField><any>(this.getChild("restNum"));
		this.m_costNum = <fgui.GTextField><any>(this.getChild("costNum"));
		this.m_reviveNum = <fgui.GTextField><any>(this.getChild("reviveNum"));
		this.m_reviveBtn = <CommonButton5><any>(this.getChild("reviveBtn"));
		
		
	}
}