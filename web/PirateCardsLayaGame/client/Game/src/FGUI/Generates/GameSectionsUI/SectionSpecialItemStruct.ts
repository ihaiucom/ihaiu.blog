/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionVerticalStar from "../../Extends/GameSectionsUI/SectionVerticalStar";
import SectionSpecialItem from "../../Extends/GameSectionsUI/SectionSpecialItem";

export default class SectionSpecialItemStruct extends fgui.GLabel
{
	public m_state : fgui.Controller;
	public m_isHideStar : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_condition : fgui.GTextField;
	public m_star : SectionVerticalStar;

	
	public static URL:string = "ui://0ajdzfv8gmqoz2v";
	
	public static DependPackages:string[] = ["GameSectionsUI","CommonGame"];

	
	public static createInstance():SectionSpecialItem {
		return <SectionSpecialItem><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionSpecialItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_isHideStar = this.getController("isHideStar");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_condition = <fgui.GTextField><any>(this.getChild("condition"));
		this.m_star = <SectionVerticalStar><any>(this.getChild("star"));
		
		
	}
}