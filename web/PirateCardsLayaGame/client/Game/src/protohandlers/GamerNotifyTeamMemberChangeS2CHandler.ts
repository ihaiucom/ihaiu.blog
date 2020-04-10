import GamerNotifyTeamMemberChangeS2C = proto.GamerNotifyTeamMemberChangeS2C;
import Game from "../Game";
var GamerNotifyTeamMemberChangeS2CHandler = function(msg: GamerNotifyTeamMemberChangeS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.team;
    model.SetMembers(msg.teamer);
}            
export {GamerNotifyTeamMemberChangeS2CHandler}
