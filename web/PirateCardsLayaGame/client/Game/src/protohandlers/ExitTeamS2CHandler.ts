import ExitTeamS2C = proto.ExitTeamS2C;
import Game from "../Game";
var ExitTeamS2CHandler = function(msg: ExitTeamS2C)
{
    // 离开房间返回
    let model = Game.moduleModel.team;
    model.LeaveTeam();
}            
export {ExitTeamS2CHandler}
