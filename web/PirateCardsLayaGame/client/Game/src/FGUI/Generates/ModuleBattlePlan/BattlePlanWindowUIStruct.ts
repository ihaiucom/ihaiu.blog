/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead from "../../Extends/CommonGame/WindowHead";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BattlePlanWindowUI from "../../Extends/ModuleBattlePlan/BattlePlanWindowUI";

export default class BattlePlanWindowUIStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_list_team : fgui.GList;
	public m_list_hero : fgui.GList;
	public m_btn_changeName : fgui.GButton;
	public m_com_windowHead : WindowHead;
	public m_btn_BattleCentern : CommonButton1;
	public m_btn_DuelTemp : CommonButton1;

	
	public static URL:string = "ui://lrfjmmwxa0hm0";
	
	public static DependPackages:string[] = ["ModuleBattlePlan","CommonGame","CommonBase"];

	
	public static createInstance():BattlePlanWindowUI {
		return <BattlePlanWindowUI><any>(fgui.UIPackage.createObject("ModuleBattlePlan","BattlePlanWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_list_team = <fgui.GList><any>(this.getChild("list_team"));
		this.m_list_hero = <fgui.GList><any>(this.getChild("list_hero"));
		this.m_btn_changeName = <fgui.GButton><any>(this.getChild("btn_changeName"));
		this.m_com_windowHead = <WindowHead><any>(this.getChild("com_windowHead"));
		this.m_btn_BattleCentern = <CommonButton1><any>(this.getChild("btn_BattleCentern"));
		this.m_btn_DuelTemp = <CommonButton1><any>(this.getChild("btn_DuelTemp"));
		
		
	}
}