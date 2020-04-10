/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVEBattleResultView from "../../Extends/BattleResult/PVEBattleResultView";
import PVPBattleResultView from "../../Extends/BattleResult/PVPBattleResultView";
import SecretLandBattleResultView from "../../Extends/BattleResult/SecretLandBattleResultView";
import BattleResultWindowUI from "../../Extends/BattleResult/BattleResultWindowUI";

export default class BattleResultWindowUIStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_pve : PVEBattleResultView;
	public m_pvp : PVPBattleResultView;
	public m_secretLand : SecretLandBattleResultView;

	
	public static URL:string = "ui://qffcb501mxqq0";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame","CommonBase"];

	
	public static createInstance():BattleResultWindowUI {
		return <BattleResultWindowUI><any>(fgui.UIPackage.createObject("BattleResult","BattleResultWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_pve = <PVEBattleResultView><any>(this.getChild("pve"));
		this.m_pvp = <PVPBattleResultView><any>(this.getChild("pvp"));
		this.m_secretLand = <SecretLandBattleResultView><any>(this.getChild("secretLand"));
		
		
	}
}