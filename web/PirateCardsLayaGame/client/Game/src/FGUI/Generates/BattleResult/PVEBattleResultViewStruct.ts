/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleFaildComponent from "../../Extends/BattleResult/BattleFaildComponent";
import BattleWinComponent from "../../Extends/BattleResult/BattleWinComponent";
import PVEBattleResultView from "../../Extends/BattleResult/PVEBattleResultView";

export default class PVEBattleResultViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_faild : BattleFaildComponent;
	public m_win : BattleWinComponent;

	
	public static URL:string = "ui://qffcb501sso410";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame"];

	
	public static createInstance():PVEBattleResultView {
		return <PVEBattleResultView><any>(fgui.UIPackage.createObject("BattleResult","PVEBattleResultView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_faild = <BattleFaildComponent><any>(this.getChild("faild"));
		this.m_win = <BattleWinComponent><any>(this.getChild("win"));
		
		
	}
}