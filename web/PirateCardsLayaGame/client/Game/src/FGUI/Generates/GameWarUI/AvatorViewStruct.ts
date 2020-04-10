/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PauseButton from "../../Extends/GameWarUI/PauseButton";
import SelfBattleButton from "../../Extends/GameWarUI/SelfBattleButton";
import AvatorView from "../../Extends/GameWarUI/AvatorView";

export default class AvatorViewStruct extends fgui.GComponent
{
	public m_hero : fgui.Controller;
	public m_imgAvator : fgui.GLoader;
	public m_progressHp : fgui.GProgressBar;
	public m_progressMp : fgui.GProgressBar;
	public m_btnPause : PauseButton;
	public m_btnSelfBattale : SelfBattleButton;

	
	public static URL:string = "ui://rfow21em98hpf";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():AvatorView {
		return <AvatorView><any>(fgui.UIPackage.createObject("GameWarUI","AvatorView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_hero = this.getController("hero");

		
		this.m_imgAvator = <fgui.GLoader><any>(this.getChild("imgAvator"));
		this.m_progressHp = <fgui.GProgressBar><any>(this.getChild("progressHp"));
		this.m_progressMp = <fgui.GProgressBar><any>(this.getChild("progressMp"));
		this.m_btnPause = <PauseButton><any>(this.getChild("btnPause"));
		this.m_btnSelfBattale = <SelfBattleButton><any>(this.getChild("btnSelfBattale"));
		
		
	}
}