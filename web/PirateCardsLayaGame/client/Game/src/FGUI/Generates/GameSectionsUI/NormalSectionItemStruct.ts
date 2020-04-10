/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionVerticalStar from "../../Extends/GameSectionsUI/SectionVerticalStar";
import NormalSectionItem from "../../Extends/GameSectionsUI/NormalSectionItem";

export default class NormalSectionItemStruct extends fgui.GButton
{
	public m_missionIndex : fgui.Controller;
	public m_button : fgui.Controller;
	public m_isNew : fgui.Controller;
	public m_isHideStar : fgui.Controller;
	public m_IsLock : fgui.Controller;
	public m_titleIcon : fgui.GLoader;
	public m_bossIcon : fgui.GLoader;
	public m_headIcon : fgui.GLoader;
	public m_condition : fgui.GTextField;
	public m_star : SectionVerticalStar;

	
	public static URL:string = "ui://0ajdzfv8l03wz2j";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():NormalSectionItem {
		return <NormalSectionItem><any>(fgui.UIPackage.createObject("GameSectionsUI","NormalSectionItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_missionIndex = this.getController("missionIndex");
		this.m_button = this.getController("button");
		this.m_isNew = this.getController("isNew");
		this.m_isHideStar = this.getController("isHideStar");
		this.m_IsLock = this.getController("IsLock");

		
		this.m_titleIcon = <fgui.GLoader><any>(this.getChild("titleIcon"));
		this.m_bossIcon = <fgui.GLoader><any>(this.getChild("bossIcon"));
		this.m_headIcon = <fgui.GLoader><any>(this.getChild("headIcon"));
		this.m_condition = <fgui.GTextField><any>(this.getChild("condition"));
		this.m_star = <SectionVerticalStar><any>(this.getChild("star"));
		
		
	}
}