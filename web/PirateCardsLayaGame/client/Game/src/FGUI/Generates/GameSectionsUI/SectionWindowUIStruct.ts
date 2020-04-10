/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionViewSpecial from "../../Extends/GameSectionsUI/SectionViewSpecial";
import SectionViewNormal from "../../Extends/GameSectionsUI/SectionViewNormal";
import SectionViewMonster from "../../Extends/GameSectionsUI/SectionViewMonster";
import GameSectionTab from "../../Extends/GameSectionsUI/GameSectionTab";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import SectionBuyTimesView from "../../Extends/CommonGame/SectionBuyTimesView";
import SectionChapterStarTips from "../../Extends/GameSectionsUI/SectionChapterStarTips";
import SectionWindowUI from "../../Extends/GameSectionsUI/SectionWindowUI";

export default class SectionWindowUIStruct extends fgui.GComponent
{
	public m_sectionType : fgui.Controller;
	public m_SpecialViewOld : SectionViewSpecial;
	public m_SpecialView : SectionViewNormal;
	public m_monsterView : SectionViewMonster;
	public m_normalView : SectionViewNormal;
	public m_btnNormal : GameSectionTab;
	public m_btnSpecial : GameSectionTab;
	public m_head : WindowHead;
	public m_buyTimesView : SectionBuyTimesView;
	public m_starTipView : SectionChapterStarTips;

	
	public static URL:string = "ui://0ajdzfv8rr430";
	
	public static DependPackages:string[] = ["GameSectionsUI","CommonGame","CommonBase"];

	
	public static createInstance():SectionWindowUI {
		return <SectionWindowUI><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_sectionType = this.getController("sectionType");

		
		this.m_SpecialViewOld = <SectionViewSpecial><any>(this.getChild("SpecialViewOld"));
		this.m_SpecialView = <SectionViewNormal><any>(this.getChild("SpecialView"));
		this.m_monsterView = <SectionViewMonster><any>(this.getChild("monsterView"));
		this.m_normalView = <SectionViewNormal><any>(this.getChild("normalView"));
		this.m_btnNormal = <GameSectionTab><any>(this.getChild("btnNormal"));
		this.m_btnSpecial = <GameSectionTab><any>(this.getChild("btnSpecial"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_buyTimesView = <SectionBuyTimesView><any>(this.getChild("buyTimesView"));
		this.m_starTipView = <SectionChapterStarTips><any>(this.getChild("starTipView"));
		
		
	}
}