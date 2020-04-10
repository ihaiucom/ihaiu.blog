/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import MatchWindowUI from "../../Extends/GameMatchUI/MatchWindowUI";
import RoomListView from "../../Extends/GameMatchUI/RoomListView";
import RoomItem from "../../Extends/GameMatchUI/RoomItem";
import RoomMainView from "../../Extends/GameMatchUI/RoomMainView";
import PvPMainView from "../../Extends/GameMatchUI/PvPMainView";
import PvEMainView from "../../Extends/GameMatchUI/PvEMainView";
import P2vP2MainView from "../../Extends/GameMatchUI/P2vP2MainView";
import RoomPlayerItem from "../../Extends/GameMatchUI/RoomPlayerItem";
import P2vP2MainNewView from "../../Extends/GameMatchUI/P2vP2MainNewView";
import MatchLPlayerItem from "../../Extends/GameMatchUI/MatchLPlayerItem";
import MatchRPlayerItem from "../../Extends/GameMatchUI/MatchRPlayerItem";
import PvEMainNewView from "../../Extends/GameMatchUI/PvEMainNewView";
import PvPMainNewView from "../../Extends/GameMatchUI/PvPMainNewView";
import P3vEMainNewView from "../../Extends/GameMatchUI/P3vEMainNewView";
import MatchLHeroItem from "../../Extends/GameMatchUI/MatchLHeroItem";
import MatchRHeroItem from "../../Extends/GameMatchUI/MatchRHeroItem";
import MatchPvpProgressBar from "../../Extends/GameMatchUI/MatchPvpProgressBar";

export default class GameMatchUIBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(MatchWindowUI.URL, MatchWindowUI);
		bind(RoomListView.URL, RoomListView);
		bind(RoomItem.URL, RoomItem);
		bind(RoomMainView.URL, RoomMainView);
		bind(PvPMainView.URL, PvPMainView);
		bind(PvEMainView.URL, PvEMainView);
		bind(P2vP2MainView.URL, P2vP2MainView);
		bind(RoomPlayerItem.URL, RoomPlayerItem);
		bind(P2vP2MainNewView.URL, P2vP2MainNewView);
		bind(MatchLPlayerItem.URL, MatchLPlayerItem);
		bind(MatchRPlayerItem.URL, MatchRPlayerItem);
		bind(PvEMainNewView.URL, PvEMainNewView);
		bind(PvPMainNewView.URL, PvPMainNewView);
		bind(P3vEMainNewView.URL, P3vEMainNewView);
		bind(MatchLHeroItem.URL, MatchLHeroItem);
		bind(MatchRHeroItem.URL, MatchRHeroItem);
		bind(MatchPvpProgressBar.URL, MatchPvpProgressBar);
	}
}