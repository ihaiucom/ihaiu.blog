/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterButton from "../../Extends/GameWar3DUI/MonsterButton";
import BossView from "../../Extends/GameWar3DUI/BossView";

export default class BossViewStruct extends fgui.GComponent
{
	public m_color : fgui.Controller;
	public m_listBuff : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_labIndex : fgui.GTextField;
	public m_labHp : fgui.GTextField;
	public m_btnBoss : MonsterButton;
	public m_progressHP1 : fgui.GProgressBar;
	public m_progressHP2 : fgui.GProgressBar;
	public m_progressHP3 : fgui.GProgressBar;
	public m_progressHP4 : fgui.GProgressBar;
	public m_progressHP5 : fgui.GProgressBar;
	public m_progressHP6 : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzb3sf37";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():BossView {
		return <BossView><any>(fgui.UIPackage.createObject("GameWar3DUI","BossView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");

		
		this.m_listBuff = <fgui.GList><any>(this.getChild("listBuff"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labIndex = <fgui.GTextField><any>(this.getChild("labIndex"));
		this.m_labHp = <fgui.GTextField><any>(this.getChild("labHp"));
		this.m_btnBoss = <MonsterButton><any>(this.getChild("btnBoss"));
		this.m_progressHP1 = <fgui.GProgressBar><any>(this.getChild("progressHP1"));
		this.m_progressHP2 = <fgui.GProgressBar><any>(this.getChild("progressHP2"));
		this.m_progressHP3 = <fgui.GProgressBar><any>(this.getChild("progressHP3"));
		this.m_progressHP4 = <fgui.GProgressBar><any>(this.getChild("progressHP4"));
		this.m_progressHP5 = <fgui.GProgressBar><any>(this.getChild("progressHP5"));
		this.m_progressHP6 = <fgui.GProgressBar><any>(this.getChild("progressHP6"));
		
		
	}
}