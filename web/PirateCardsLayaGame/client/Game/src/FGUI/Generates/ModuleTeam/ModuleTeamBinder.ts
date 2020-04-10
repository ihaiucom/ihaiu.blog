/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import TeamWindowUI from "../../Extends/ModuleTeam/TeamWindowUI";
import CommonCDButton from "../../Extends/ModuleTeam/CommonCDButton";
import SectionButton from "../../Extends/ModuleTeam/SectionButton";
import TypeButton from "../../Extends/ModuleTeam/TypeButton";
import FriendItem from "../../Extends/ModuleTeam/FriendItem";
import PlayerItem from "../../Extends/ModuleTeam/PlayerItem";
import SelectView from "../../Extends/ModuleTeam/SelectView";
import TeamView from "../../Extends/ModuleTeam/TeamView";
import TeamSelectDialog from "../../Extends/ModuleTeam/TeamSelectDialog";
import TeamPlayerDialog from "../../Extends/ModuleTeam/TeamPlayerDialog";
import MatchView from "../../Extends/ModuleTeam/MatchView";
import TeamInviteDialog from "../../Extends/ModuleTeam/TeamInviteDialog";

export default class ModuleTeamBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(TeamWindowUI.URL, TeamWindowUI);
		bind(CommonCDButton.URL, CommonCDButton);
		bind(SectionButton.URL, SectionButton);
		bind(TypeButton.URL, TypeButton);
		bind(FriendItem.URL, FriendItem);
		bind(PlayerItem.URL, PlayerItem);
		bind(SelectView.URL, SelectView);
		bind(TeamView.URL, TeamView);
		bind(TeamSelectDialog.URL, TeamSelectDialog);
		bind(TeamPlayerDialog.URL, TeamPlayerDialog);
		bind(MatchView.URL, MatchView);
		bind(TeamInviteDialog.URL, TeamInviteDialog);
	}
}