import GamerNotifyTeamReadyS2C = proto.GamerNotifyTeamReadyS2C;
import Game from "../Game";
var GamerNotifyTeamReadyS2CHandler = function(msg: GamerNotifyTeamReadyS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.team;
    model.SetReady(msg.memberId, msg.isReady);
}            
export {GamerNotifyTeamReadyS2CHandler}
