/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempStar from "../../Extends/CommonGame/DuelTempStar";
import DuelDanLevel from "../../Extends/CommonGame/DuelDanLevel";
import DuelTempInfoView from "../../Extends/ModuleDuelTemp/DuelTempInfoView";

export default class DuelTempInfoViewStruct extends fgui.GComponent
{
	public m_time : fgui.GTextField;
	public m_timeLeft : fgui.GTextField;
	public m_winTiimes : fgui.GTextField;
	public m_star : DuelTempStar;
	public m_danLevel : DuelDanLevel;

	
	public static URL:string = "ui://rx0filvjtgxh8";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempInfoView {
		return <DuelTempInfoView><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_time = <fgui.GTextField><any>(this.getChild("time"));
		this.m_timeLeft = <fgui.GTextField><any>(this.getChild("timeLeft"));
		this.m_winTiimes = <fgui.GTextField><any>(this.getChild("winTiimes"));
		this.m_star = <DuelTempStar><any>(this.getChild("star"));
		this.m_danLevel = <DuelDanLevel><any>(this.getChild("danLevel"));
		
		
	}
}