/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBattleView from "../../Extends/GameWar3DUI/SecretBattleView";

export default class SecretBattleViewStruct extends fgui.GComponent
{
	public m_nowTime : fgui.GTextField;
	public m_totalTime : fgui.GTextField;
	public m_secretProgress : fgui.GProgressBar;

	
	public static URL:string = "ui://yhpe9txzwt85ft";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():SecretBattleView {
		return <SecretBattleView><any>(fgui.UIPackage.createObject("GameWar3DUI","SecretBattleView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_nowTime = <fgui.GTextField><any>(this.getChild("nowTime"));
		this.m_totalTime = <fgui.GTextField><any>(this.getChild("totalTime"));
		this.m_secretProgress = <fgui.GProgressBar><any>(this.getChild("secretProgress"));
		
		
	}
}