import GamerNotifyTeamS2C = proto.GamerNotifyTeamS2C;
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
var GamerNotifyTeamS2CHandler = function(msg: GamerNotifyTeamS2C)
{
    let model = Game.moduleModel.team;
    if (!Game.menu.isOpened(MenuId.Team) && !Game.moduleModel.match.isGameLauncherEnterWar) 
    {
        model.GetTeam() ? (model.IsFull() && Game.menu.open(MenuId.Team)) : Game.menu.open(MenuId.Team);    
    }

    model.SetTeam(msg.team);

    if (model.IsFull()) 
    {
        Game.event.dispatch("MATCH_FINISH");
    }
    
}            
export {GamerNotifyTeamS2CHandler}
