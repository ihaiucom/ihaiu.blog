import GamerNotifyTeamChangeS2C = proto.GamerNotifyTeamChangeS2C;
import Game from "../Game";
var GamerNotifyTeamChangeS2CHandler = function(msg: GamerNotifyTeamChangeS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.team;
    switch (msg.type) {
        case 1:
            model.SetAim(msg.value);
            break;
        case 2:
            model.SetStatus(msg.value);
            model.matchTime = msg.timeStamp;
            break;
        case 3:
            model.SetAllReady(false);
            break;
    }
}            
export {GamerNotifyTeamChangeS2CHandler}
