/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempBackground from "../../Extends/CommonGame/DuelTempBackground";
import DueltempResultPanel from "../../Extends/CommonGame/DueltempResultPanel";
import NewSeasonWindowUI from "../../Extends/ModuleDialogs/NewSeasonWindowUI";

export default class NewSeasonWindowUIStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_bg : DuelTempBackground;
	public m_newSeason : DueltempResultPanel;
	public m_oldSeason : DueltempResultPanel;

	
	public static URL:string = "ui://enntu5su9reyl";
	
	public static DependPackages:string[] = ["ModuleDialogs","CommonGame","CommonBase"];

	
	public static createInstance():NewSeasonWindowUI {
		return <NewSeasonWindowUI><any>(fgui.UIPackage.createObject("ModuleDialogs","NewSeasonWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_bg = <DuelTempBackground><any>(this.getChild("bg"));
		this.m_newSeason = <DueltempResultPanel><any>(this.getChild("newSeason"));
		this.m_oldSeason = <DueltempResultPanel><any>(this.getChild("oldSeason"));
		
		
	}
}