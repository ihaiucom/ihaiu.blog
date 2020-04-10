/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import DuelTempWindowUI from "../../Extends/ModuleDuelTemp/DuelTempWindowUI";
import SelectHeroGroup from "../../Extends/ModuleDuelTemp/SelectHeroGroup";
import DuelTempButton from "../../Extends/ModuleDuelTemp/DuelTempButton";
import DuelTempInfoView from "../../Extends/ModuleDuelTemp/DuelTempInfoView";
import SeasonRewardPanel from "../../Extends/ModuleDuelTemp/SeasonRewardPanel";
import DuelTempTabItem from "../../Extends/ModuleDuelTemp/DuelTempTabItem";
import DuelTempDanView from "../../Extends/ModuleDuelTemp/DuelTempDanView";
import DuelTempDanIconItem from "../../Extends/ModuleDuelTemp/DuelTempDanIconItem";
import DuelTempDanListItem from "../../Extends/ModuleDuelTemp/DuelTempDanListItem";
import DuelTempDanView2 from "../../Extends/ModuleDuelTemp/DuelTempDanView2";
import DuelTempDanListItem2 from "../../Extends/ModuleDuelTemp/DuelTempDanListItem2";
import HeroGroup from "../../Extends/ModuleDuelTemp/HeroGroup";
import DuelBoardHeroPanel from "../../Extends/ModuleDuelTemp/DuelBoardHeroPanel";
import DuelTempTaskView from "../../Extends/ModuleDuelTemp/DuelTempTaskView";
import DuelTempTaskListItem from "../../Extends/ModuleDuelTemp/DuelTempTaskListItem";
import DuelTempHero from "../../Extends/ModuleDuelTemp/DuelTempHero";
import DueltempTaskon from "../../Extends/ModuleDuelTemp/DueltempTaskon";

export default class ModuleDuelTempBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(DuelTempWindowUI.URL, DuelTempWindowUI);
		bind(SelectHeroGroup.URL, SelectHeroGroup);
		bind(DuelTempButton.URL, DuelTempButton);
		bind(DuelTempInfoView.URL, DuelTempInfoView);
		bind(SeasonRewardPanel.URL, SeasonRewardPanel);
		bind(DuelTempTabItem.URL, DuelTempTabItem);
		bind(DuelTempDanView.URL, DuelTempDanView);
		bind(DuelTempDanIconItem.URL, DuelTempDanIconItem);
		bind(DuelTempDanListItem.URL, DuelTempDanListItem);
		bind(DuelTempDanView2.URL, DuelTempDanView2);
		bind(DuelTempDanListItem2.URL, DuelTempDanListItem2);
		bind(HeroGroup.URL, HeroGroup);
		bind(DuelBoardHeroPanel.URL, DuelBoardHeroPanel);
		bind(DuelTempTaskView.URL, DuelTempTaskView);
		bind(DuelTempTaskListItem.URL, DuelTempTaskListItem);
		bind(DuelTempHero.URL, DuelTempHero);
		bind(DueltempTaskon.URL, DueltempTaskon);
	}
}