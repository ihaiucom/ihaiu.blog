/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BattleResultSecretLandPanel from "../../Extends/BattleResult/BattleResultSecretLandPanel";

export default class BattleResultSecretLandPanelStruct extends fgui.GComponent
{
	public m_cost : fgui.GTextField;
	public m_fatigue : fgui.GTextField;
	public m_giveupBtn : CommonButton1;
	public m_confirmBtn : CommonButton1;

	
	public static URL:string = "ui://qffcb501ee481o";
	
	public static DependPackages:string[] = ["BattleResult","CommonBase"];

	
	public static createInstance():BattleResultSecretLandPanel {
		return <BattleResultSecretLandPanel><any>(fgui.UIPackage.createObject("BattleResult","BattleResultSecretLandPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_cost = <fgui.GTextField><any>(this.getChild("cost"));
		this.m_fatigue = <fgui.GTextField><any>(this.getChild("fatigue"));
		this.m_giveupBtn = <CommonButton1><any>(this.getChild("giveupBtn"));
		this.m_confirmBtn = <CommonButton1><any>(this.getChild("confirmBtn"));
		
		
	}
}