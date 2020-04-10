/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BtnTeamPanel from "../../Extends/ModuleBattlePlan/BtnTeamPanel";

export default class BtnTeamPanelStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_img_choose : fgui.GImage;

	
	public static URL:string = "ui://lrfjmmwxod3ld";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame"];

	
	public static createInstance():BtnTeamPanel {
		return <BtnTeamPanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","BtnTeamPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_img_choose = <fgui.GImage><any>(this.getChild("img_choose"));
		
		
	}
}