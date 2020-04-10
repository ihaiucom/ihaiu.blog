/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GamePlayerInfoWindowUI from "../../Extends/GamePlayerInfoUI/GamePlayerInfoWindowUI";
import GamePlayerInfoTab from "../../Extends/GamePlayerInfoUI/GamePlayerInfoTab";
import GamePlayerInfoInfoView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoInfoView";
import GamePlayerInfoHeroView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroView";
import GamePlayerInfoHeroListTab from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroListTab";
import GamePlayerInfoHeroListItem from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroListItem";
import GamePlayerInfoChangeHeadPanel from "../../Extends/GamePlayerInfoUI/GamePlayerInfoChangeHeadPanel";
import GamePlayerInfoHeadIcon from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeadIcon";
import GamePlayerPanelBackground from "../../Extends/GamePlayerInfoUI/GamePlayerPanelBackground";
import GamePlayerHead from "../../Extends/GamePlayerInfoUI/GamePlayerHead";
import GamePlayerHead2 from "../../Extends/GamePlayerInfoUI/GamePlayerHead2";
import GamePlayerDraugItem from "../../Extends/GamePlayerInfoUI/GamePlayerDraugItem";
import GamePlayerEquipItem from "../../Extends/GamePlayerInfoUI/GamePlayerEquipItem";
import GamePlayerBackground from "../../Extends/GamePlayerInfoUI/GamePlayerBackground";

export default class GamePlayerInfoUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(GamePlayerInfoWindowUI.URL, GamePlayerInfoWindowUI);
		bind(GamePlayerInfoTab.URL, GamePlayerInfoTab);
		bind(GamePlayerInfoInfoView.URL, GamePlayerInfoInfoView);
		bind(GamePlayerInfoHeroView.URL, GamePlayerInfoHeroView);
		bind(GamePlayerInfoHeroListTab.URL, GamePlayerInfoHeroListTab);
		bind(GamePlayerInfoHeroListItem.URL, GamePlayerInfoHeroListItem);
		bind(GamePlayerInfoChangeHeadPanel.URL, GamePlayerInfoChangeHeadPanel);
		bind(GamePlayerInfoHeadIcon.URL, GamePlayerInfoHeadIcon);
		bind(GamePlayerPanelBackground.URL, GamePlayerPanelBackground);
		bind(GamePlayerHead.URL, GamePlayerHead);
		bind(GamePlayerHead2.URL, GamePlayerHead2);
		bind(GamePlayerDraugItem.URL, GamePlayerDraugItem);
		bind(GamePlayerEquipItem.URL, GamePlayerEquipItem);
		bind(GamePlayerBackground.URL, GamePlayerBackground);
	}
}