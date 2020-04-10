/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HorizontalStar from "../../Extends/CommonGame/HorizontalStar";
import SectionViewMonsterItem from "../../Extends/GameSectionsUI/SectionViewMonsterItem";

export default class SectionViewMonsterItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_isHideStar : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_condition : fgui.GTextField;
	public m_star : HorizontalStar;

	
	public static URL:string = "ui://0ajdzfv8tiahz2m";
	
	public static DependPackages:string[] = ["GameSectionsUI","CommonGame","_ResImageUIV1"];

	
	public static createInstance():SectionViewMonsterItem {
		return <SectionViewMonsterItem><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionViewMonsterItem"));
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
		this.m_star = <HorizontalStar><any>(this.getChild("star"));
		
		
	}
}