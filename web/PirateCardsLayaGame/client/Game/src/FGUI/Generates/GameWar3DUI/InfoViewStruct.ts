/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBattleView from "../../Extends/GameWar3DUI/SecretBattleView";
import InfoView from "../../Extends/GameWar3DUI/InfoView";

export default class InfoViewStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_pic_rush_wave_text : fgui.GImage;
	public m_battle_time : fgui.GTextField;
	public m_rush_time : fgui.GTextField;
	public m_text_defence_wave : fgui.GTextField;
	public m_pic_battle : fgui.GImage;
	public m_wave_progress : fgui.GProgressBar;
	public m_secretBattleInfo : SecretBattleView;

	
	public static URL:string = "ui://yhpe9txzb3sf36";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():InfoView {
		return <InfoView><any>(fgui.UIPackage.createObject("GameWar3DUI","InfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_pic_rush_wave_text = <fgui.GImage><any>(this.getChild("pic_rush_wave_text"));
		this.m_battle_time = <fgui.GTextField><any>(this.getChild("battle_time"));
		this.m_rush_time = <fgui.GTextField><any>(this.getChild("rush_time"));
		this.m_text_defence_wave = <fgui.GTextField><any>(this.getChild("text_defence_wave"));
		this.m_pic_battle = <fgui.GImage><any>(this.getChild("pic_battle"));
		this.m_wave_progress = <fgui.GProgressBar><any>(this.getChild("wave_progress"));
		this.m_secretBattleInfo = <SecretBattleView><any>(this.getChild("secretBattleInfo"));
		
		
	}
}