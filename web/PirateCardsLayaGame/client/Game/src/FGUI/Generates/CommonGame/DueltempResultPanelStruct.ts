/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempStar from "../../Extends/CommonGame/DuelTempStar";
import DuelDanLevel from "../../Extends/CommonGame/DuelDanLevel";
import CommonButtonNew from "../../Extends/CommonBase/CommonButtonNew";
import DueltempResultPanel from "../../Extends/CommonGame/DueltempResultPanel";

export default class DueltempResultPanelStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_star : DuelTempStar;
	public m_danLevel : DuelDanLevel;
	public m_confirmBtn : CommonButtonNew;

	
	public static URL:string = "ui://4snov4n9sso414";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():DueltempResultPanel {
		return <DueltempResultPanel><any>(fgui.UIPackage.createObject("CommonGame","DueltempResultPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_star = <DuelTempStar><any>(this.getChild("star"));
		this.m_danLevel = <DuelDanLevel><any>(this.getChild("danLevel"));
		this.m_confirmBtn = <CommonButtonNew><any>(this.getChild("confirmBtn"));
		
		
	}
}