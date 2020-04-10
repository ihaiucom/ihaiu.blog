/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import RankWindowUI from "../../Extends/ModuleRank/RankWindowUI";
import RankComboBox from "../../Extends/ModuleRank/RankComboBox";
import RankDuelTempLadder from "../../Extends/ModuleRank/RankDuelTempLadder";
import RankDuelTempLadderItem from "../../Extends/ModuleRank/RankDuelTempLadderItem";
import RankSwitch from "../../Extends/ModuleRank/RankSwitch";
import RankSwitchButton from "../../Extends/ModuleRank/RankSwitchButton";
import RankDuelTempFameHistory from "../../Extends/ModuleRank/RankDuelTempFameHistory";
import RankComboTab from "../../Extends/ModuleRank/RankComboTab";
import RankComboItem from "../../Extends/ModuleRank/RankComboItem";
import RankSeasonTitleView from "../../Extends/ModuleRank/RankSeasonTitleView";
import RankDuelTempFame from "../../Extends/ModuleRank/RankDuelTempFame";
import RankDuelTempFameItem from "../../Extends/ModuleRank/RankDuelTempFameItem";
import RankDuelTempFameHistoryItem from "../../Extends/ModuleRank/RankDuelTempFameHistoryItem";

export default class ModuleRankBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(RankWindowUI.URL, RankWindowUI);
		bind(RankComboBox.URL, RankComboBox);
		bind(RankDuelTempLadder.URL, RankDuelTempLadder);
		bind(RankDuelTempLadderItem.URL, RankDuelTempLadderItem);
		bind(RankSwitch.URL, RankSwitch);
		bind(RankSwitchButton.URL, RankSwitchButton);
		bind(RankDuelTempFameHistory.URL, RankDuelTempFameHistory);
		bind(RankComboTab.URL, RankComboTab);
		bind(RankComboItem.URL, RankComboItem);
		bind(RankSeasonTitleView.URL, RankSeasonTitleView);
		bind(RankDuelTempFame.URL, RankDuelTempFame);
		bind(RankDuelTempFameItem.URL, RankDuelTempFameItem);
		bind(RankDuelTempFameHistoryItem.URL, RankDuelTempFameHistoryItem);
	}
}