/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UnlockTeamCostMoneyPanel from "../../Extends/ModuleBattlePlan/UnlockTeamCostMoneyPanel";

export default class UnlockTeamCostMoneyPanelStruct extends fgui.GComponent
{
	public m_text_conent : fgui.GTextField;

	
	public static URL:string = "ui://lrfjmmwxod3li";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():UnlockTeamCostMoneyPanel {
		return <UnlockTeamCostMoneyPanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","UnlockTeamCostMoneyPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_text_conent = <fgui.GTextField><any>(this.getChild("text_conent"));
		
		
	}
}