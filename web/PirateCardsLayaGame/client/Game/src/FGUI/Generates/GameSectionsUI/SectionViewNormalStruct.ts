/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameSectionChapterInfo from "../../Extends/GameSectionsUI/GameSectionChapterInfo";
import SwitchChapter from "../../Extends/GameSectionsUI/SwitchChapter";
import SectionStarCount from "../../Extends/GameSectionsUI/SectionStarCount";
import RewardBoxButton from "../../Extends/GameSectionsUI/RewardBoxButton";
import SectionViewNormal from "../../Extends/GameSectionsUI/SectionViewNormal";

export default class SectionViewNormalStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_list : fgui.GList;
	public m_chapterInfo : GameSectionChapterInfo;
	public m_switchChapter : SwitchChapter;
	public m_starCount : SectionStarCount;
	public m_reward1 : RewardBoxButton;
	public m_reward2 : RewardBoxButton;
	public m_reward3 : RewardBoxButton;

	
	public static URL:string = "ui://0ajdzfv8l03wz2d";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionViewNormal {
		return <SectionViewNormal><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionViewNormal"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_chapterInfo = <GameSectionChapterInfo><any>(this.getChild("chapterInfo"));
		this.m_switchChapter = <SwitchChapter><any>(this.getChild("switchChapter"));
		this.m_starCount = <SectionStarCount><any>(this.getChild("starCount"));
		this.m_reward1 = <RewardBoxButton><any>(this.getChild("reward1"));
		this.m_reward2 = <RewardBoxButton><any>(this.getChild("reward2"));
		this.m_reward3 = <RewardBoxButton><any>(this.getChild("reward3"));
		
		
	}
}