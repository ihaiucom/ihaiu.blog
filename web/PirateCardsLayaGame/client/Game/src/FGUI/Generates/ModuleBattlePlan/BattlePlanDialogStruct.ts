/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitDialog from "../../Extends/CommonGame/HitDialog";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import TextInput from "../../Extends/ModuleBattlePlan/TextInput";
import ComMoneyCost from "../../Extends/ModuleBattlePlan/ComMoneyCost";
import BattlePlanDialog from "../../Extends/ModuleBattlePlan/BattlePlanDialog";

export default class BattlePlanDialogStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_textTeamUnlcok : fgui.GTextField;
	public m_hitCommonPanel : HitDialog;
	public m_btnChangeNameCentern : CommonButton1;
	public m_comTextInput : TextInput;
	public m_btnUnlockTeam : CommonButton1;
	public m_ComUnlockCost : ComMoneyCost;
	public m_btnHitCentern : CommonButton1;
	public m_WarnHitCenterBtn : CommonButton1;

	
	public static URL:string = "ui://lrfjmmwxjp07j";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonBase","CommonGame"];

	
	public static createInstance():BattlePlanDialog {
		return <BattlePlanDialog><any>(fgui.UIPackage.createObject("ModuleBattlePlan","BattlePlanDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_textTeamUnlcok = <fgui.GTextField><any>(this.getChild("textTeamUnlcok"));
		this.m_hitCommonPanel = <HitDialog><any>(this.getChild("hitCommonPanel"));
		this.m_btnChangeNameCentern = <CommonButton1><any>(this.getChild("btnChangeNameCentern"));
		this.m_comTextInput = <TextInput><any>(this.getChild("comTextInput"));
		this.m_btnUnlockTeam = <CommonButton1><any>(this.getChild("btnUnlockTeam"));
		this.m_ComUnlockCost = <ComMoneyCost><any>(this.getChild("ComUnlockCost"));
		this.m_btnHitCentern = <CommonButton1><any>(this.getChild("btnHitCentern"));
		this.m_WarnHitCenterBtn = <CommonButton1><any>(this.getChild("WarnHitCenterBtn"));
		
		
	}
}