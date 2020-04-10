/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyHp1ProgressBar from "../../Extends/GameWarUI/EnemyHp1ProgressBar";
import EnemyHp2ProgressBar from "../../Extends/GameWarUI/EnemyHp2ProgressBar";
import EnemyHp3ProgressBar from "../../Extends/GameWarUI/EnemyHp3ProgressBar";
import EnemyHp4ProgressBar from "../../Extends/GameWarUI/EnemyHp4ProgressBar";
import EnemyHp5ProgressBar from "../../Extends/GameWarUI/EnemyHp5ProgressBar";
import EnemyHp6ProgressBar from "../../Extends/GameWarUI/EnemyHp6ProgressBar";
import EnemyHp7ProgressBar from "../../Extends/GameWarUI/EnemyHp7ProgressBar";
import EnemyView from "../../Extends/GameWarUI/EnemyView";

export default class EnemyViewStruct extends fgui.GComponent
{
	public m_color : fgui.Controller;
	public m_labLevelName : fgui.GTextField;
	public m_labHpIndex : fgui.GTextField;
	public m_labHpScale : fgui.GTextField;
	public m_labName : fgui.GTextField;
	public m_progressHp1 : EnemyHp1ProgressBar;
	public m_progressHp2 : EnemyHp2ProgressBar;
	public m_progressHp3 : EnemyHp3ProgressBar;
	public m_progressHp4 : EnemyHp4ProgressBar;
	public m_progressHp5 : EnemyHp5ProgressBar;
	public m_progressHp6 : EnemyHp6ProgressBar;
	public m_progressHp7 : EnemyHp7ProgressBar;

	
	public static URL:string = "ui://rfow21emi78t46";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():EnemyView {
		return <EnemyView><any>(fgui.UIPackage.createObject("GameWarUI","EnemyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_labLevelName = <fgui.GTextField><any>(this.getChild("labLevelName"));
		this.m_labHpIndex = <fgui.GTextField><any>(this.getChild("labHpIndex"));
		this.m_labHpScale = <fgui.GTextField><any>(this.getChild("labHpScale"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_progressHp1 = <EnemyHp1ProgressBar><any>(this.getChild("progressHp1"));
		this.m_progressHp2 = <EnemyHp2ProgressBar><any>(this.getChild("progressHp2"));
		this.m_progressHp3 = <EnemyHp3ProgressBar><any>(this.getChild("progressHp3"));
		this.m_progressHp4 = <EnemyHp4ProgressBar><any>(this.getChild("progressHp4"));
		this.m_progressHp5 = <EnemyHp5ProgressBar><any>(this.getChild("progressHp5"));
		this.m_progressHp6 = <EnemyHp6ProgressBar><any>(this.getChild("progressHp6"));
		this.m_progressHp7 = <EnemyHp7ProgressBar><any>(this.getChild("progressHp7"));
		
		
	}
}