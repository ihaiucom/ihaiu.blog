/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JoystickView from "../../Extends/GameWarUI/JoystickView";
import SkillContralView from "../../Extends/GameWarUI/SkillContralView";
import PvEView from "../../Extends/GameWarUI/PvEView";
import PvPView from "../../Extends/GameWarUI/PvPView";
import P2vP2View from "../../Extends/GameWarUI/P2vP2View";
import LevelInfoView from "../../Extends/GameWarUI/LevelInfoView";
import PauseView from "../../Extends/GameWarUI/PauseView";
import GoStepView from "../../Extends/GameWarUI/GoStepView";
import WarWindowUI from "../../Extends/GameWarUI/WarWindowUI";

export default class WarWindowUIStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_hero : fgui.Controller;
	public m_ping : fgui.GTextField;
	public m_joystickView : JoystickView;
	public m_skillcontralView : SkillContralView;
	public m_pveView : PvEView;
	public m_pvpView : PvPView;
	public m_p2vp2View : P2vP2View;
	public m_levelInfoView : LevelInfoView;
	public m_pauseView : PauseView;
	public m_goStepView : GoStepView;

	
	public static URL:string = "ui://rfow21em98hp0";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():WarWindowUI {
		return <WarWindowUI><any>(fgui.UIPackage.createObject("GameWarUI","WarWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");
		this.m_hero = this.getController("hero");

		
		this.m_ping = <fgui.GTextField><any>(this.getChild("ping"));
		this.m_joystickView = <JoystickView><any>(this.getChild("joystickView"));
		this.m_skillcontralView = <SkillContralView><any>(this.getChild("skillcontralView"));
		this.m_pveView = <PvEView><any>(this.getChild("pveView"));
		this.m_pvpView = <PvPView><any>(this.getChild("pvpView"));
		this.m_p2vp2View = <P2vP2View><any>(this.getChild("p2vp2View"));
		this.m_levelInfoView = <LevelInfoView><any>(this.getChild("levelInfoView"));
		this.m_pauseView = <PauseView><any>(this.getChild("pauseView"));
		this.m_goStepView = <GoStepView><any>(this.getChild("goStepView"));
		
		
	}
}