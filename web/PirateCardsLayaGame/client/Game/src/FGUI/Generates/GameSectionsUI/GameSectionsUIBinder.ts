/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import SectionWindowUI from "../../Extends/GameSectionsUI/SectionWindowUI";
import SectionViewSpecial from "../../Extends/GameSectionsUI/SectionViewSpecial";
import SectionViewMonster from "../../Extends/GameSectionsUI/SectionViewMonster";
import SectionViewNormal from "../../Extends/GameSectionsUI/SectionViewNormal";
import GameSectionTab from "../../Extends/GameSectionsUI/GameSectionTab";
import GameSectionChapterInfo from "../../Extends/GameSectionsUI/GameSectionChapterInfo";
import SwitchChapter from "../../Extends/GameSectionsUI/SwitchChapter";
import SwitchChpaterButton from "../../Extends/GameSectionsUI/SwitchChpaterButton";
import RewardBoxButton from "../../Extends/GameSectionsUI/RewardBoxButton";
import NormalSectionItem from "../../Extends/GameSectionsUI/NormalSectionItem";
import SectionStarCount from "../../Extends/GameSectionsUI/SectionStarCount";
import SectionVerticalStar from "../../Extends/GameSectionsUI/SectionVerticalStar";
import SectionAddButton from "../../Extends/GameSectionsUI/SectionAddButton";
import SectionViewMonsterItem from "../../Extends/GameSectionsUI/SectionViewMonsterItem";
import SectionDetailUI from "../../Extends/GameSectionsUI/SectionDetailUI";
import SectionChapterStarTips from "../../Extends/GameSectionsUI/SectionChapterStarTips";
import MissionCondition from "../../Extends/GameSectionsUI/MissionCondition";
import RewardItem2 from "../../Extends/GameSectionsUI/RewardItem2";
import SectionSpecialItem from "../../Extends/GameSectionsUI/SectionSpecialItem";

export default class GameSectionsUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(SectionWindowUI.URL, SectionWindowUI);
		bind(SectionViewSpecial.URL, SectionViewSpecial);
		bind(SectionViewMonster.URL, SectionViewMonster);
		bind(SectionViewNormal.URL, SectionViewNormal);
		bind(GameSectionTab.URL, GameSectionTab);
		bind(GameSectionChapterInfo.URL, GameSectionChapterInfo);
		bind(SwitchChapter.URL, SwitchChapter);
		bind(SwitchChpaterButton.URL, SwitchChpaterButton);
		bind(RewardBoxButton.URL, RewardBoxButton);
		bind(NormalSectionItem.URL, NormalSectionItem);
		bind(SectionStarCount.URL, SectionStarCount);
		bind(SectionVerticalStar.URL, SectionVerticalStar);
		bind(SectionAddButton.URL, SectionAddButton);
		bind(SectionViewMonsterItem.URL, SectionViewMonsterItem);
		bind(SectionDetailUI.URL, SectionDetailUI);
		bind(SectionChapterStarTips.URL, SectionChapterStarTips);
		bind(MissionCondition.URL, MissionCondition);
		bind(RewardItem2.URL, RewardItem2);
		bind(SectionSpecialItem.URL, SectionSpecialItem);
	}
}